import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";

class PostsNew extends Component {
  state = {};
  onSubmit = (formValues) => {
    console.log("hello", formValues);
  };
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;
    // console.log(this.props.createPost);
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input name="title" type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input
            name="categories"
            type="text"
            className="form-control"
            {...categories}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="content" className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

PostsNew = connect(null, { createPost })(PostsNew);

export default reduxForm({
  form: "PostsNew",
  fields: ["title", "categories", "content"],
})(PostsNew);
