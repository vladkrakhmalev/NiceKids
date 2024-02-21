import { CourseCartAdmin } from "@/entities/course/ui/CourseCartAdmin"
import { coursesData } from '../model/coursesList'
import './CoursesListAdmin.css'
import { AddCourse } from "@/features/add-course/ui/AddCourse"

export const CoursesListAdmin = () => {

  return(
    <div className="courses__list">

      {coursesData.map(course => 
        <CourseCartAdmin key={course.id} course={course}/>
      )}
      <AddCourse/>
    </div>
  )
}