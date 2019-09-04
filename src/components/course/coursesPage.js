import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      courses: {
        title: ''
      }
     };
     this.onChangeTitle = this.onChangeTitle.bind(this);
     this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    this.props.createCourse(this.state.courses);
  }
  
  onChangeTitle(event){
    const courses = this.state.courses;
    courses.title = event.target.value;
    this.setState({
      courses: courses
    });
  }

  render() { 
    return (
      <div>
        <h1>Courcse</h1>
        {
          this.props.courses.map((course, key) => {
            return <p key={key}>{course.title}</p>
          })
        }
        <input className="form-group" type="text" onChange={this.onChangeTitle} value={this.state.courses.title}/>
        <button onClick={this.onClickSave} className="btn btn-success">add</button>
      </div>
    );
  }
}
 function mapStatetoProps(state, ownProps) {
   return {
    courses: state.courses
   };
 }

 function mapDispatchToProps(dispatch) {
   return {
    createCourse: course => dispatch(courseActions.createCourse(course))
   };
 }

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};
export default connect(mapStatetoProps, mapDispatchToProps)(CoursesPage);
