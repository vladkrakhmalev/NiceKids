import React from 'react'
import { TCourseData } from '../model/courseAdmin'
import './CourseCartAdmin.css'

type TCourseProps = {
  course: TCourseData
}

export const CourseCartAdmin: React.FC<TCourseProps> = ({course}) => {

  return(
    <div className="courses__item">
      <p>{course.description}</p>
      <h3>{course.title}</h3>
    </div>
  )
}