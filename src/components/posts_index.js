import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchPosts } from "../actions/index";

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <strong>{post.title}</strong>
            <span className="pull-xs-right">{post.categories}</span>
          </Link>
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <ul className="list-group">
          <h1>Posts</h1>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
