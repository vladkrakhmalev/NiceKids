import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  MainPage, 
  ProfilePage, 
  CoursesPage, 
  CoursePage, 
  LessonPage, 
  MainAdminPage, 
  CoursesAdminPage, 
  CourseAdminPage, 
  LessonAdminPage,
  AuthAdminPage
} from '@/pages'

export const Routing = () => {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/courses" element={<CoursesPage/>}>
          <Route path="/courses/:id" element={<CoursePage/>}>
            <Route path="/courses/:id/:id" element={<LessonPage/>}/>
          </Route>
        </Route>

        <Route path="/admin" element={<MainAdminPage/>}>
          <Route path="/admin/courses" element={<CoursesAdminPage/>}>
            <Route path="/admin/courses/:id" element={<CourseAdminPage/>}>
              <Route path="/admin/courses/:id/:id" element={<LessonAdminPage/>} />
            </Route>
          </Route>
        </Route>
        <Route path='/admin/auth' element={<AuthAdminPage/>} />

      </Routes>
    </BrowserRouter>
  )  
} 