import React from 'react';

const AddComment = () => {
    return (
        <div>
        <h3>Add a Comment</h3>
        <form >
            <div className="form-group">
              <textarea rows="5"
                  required
                  className="form-control"
                  value={this.state.content}
                  placeholder="Type a comment"
                //   onChange={this.onChangeContent}
                  >
              </textarea>
            </div>
            <div className="form-group" align="right">
              <input type="submit"
                  className="btn btn-dark"
                  value="Post Comment">
              </input>
            </div>
        </form>
        </div>
    );
}

export default AddComment;
