import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router";
import PropTypes from "prop-types";

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-danger">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (props) => {
    this.props.createPost(props).then(() => {
      this.context.router.push("/");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <Field
            name="title"
            id="title"
            component={this.renderInput}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="categories">Categories</label>
          <br />
          <Field
            name="categories"
            id="categories"
            component={this.renderInput}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="content">Description</label>
          <br />
          <Field name="content" id="content" component={this.renderTextArea} />
        </div>
        <button
          type="submit"
          style={{ margin: "5px" }}
          className="btn btn-primary"
        >
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) errors.title = "Enter a valid title";
  if (!values.categories) errors.categories = "Enter a valid categories";
  if (!values.content) errors.content = "Enter a valid content";

  return errors;
}

PostsNew = connect(null, { createPost })(PostsNew);

export default reduxForm({
  form: "PostsNew",
  fields: ["title", "categories", "content"],
  validate,
})(PostsNew);
