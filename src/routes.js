import Home from './routes/Home.svelte';

// signup
import Basic from './routes/signup/Basic.svelte'
import Phone from './routes/signup/Phone.svelte'
import VerifyCode from './routes/signup/VerifyCode.svelte'
import Password from './routes/signup/Password.svelte'
import Passcode from './routes/signup/Passcode.svelte'

// login
import Login from './routes/login/Login.svelte'
import VerifyLoginCode from './routes/login/VerifyCode.svelte'
import Update from './routes/login/Update.svelte'

// parent
import Student from './routes/parent/Student.svelte'
import Subject from './routes/parent/Subject.svelte'

// profile
import Profile from './routes/profile/Profile.svelte'
import ChangePassword from './routes/profile/ChangePassword.svelte'
import ChangePasscode from './routes/profile/ChangePasscode.svelte'
import AddStudent from './routes/profile/AddStudent.svelte'
import AddStudentVerifyCode from './routes/profile/AddStudentVerifyCode.svelte'



export default {
    '/': Home,

    '/signup/basic': Basic,
    '/signup/phone': Phone,
    '/signup/verify-code': VerifyCode,
    '/signup/password': Password,
    '/signup/passcode': Passcode,

    '/login': Login,
    '/login/verify-code': VerifyLoginCode,
    '/login/update': Update,

    '/parent/:studentID': Student,
    '/parent/:studentID/:subjectID': Subject,

    '/profile': Profile,
    '/profile/change-password': ChangePassword,
    '/profile/change-passcode': ChangePasscode,
    '/profile/add-student': AddStudent,
    '/profile/add-student/verify-code': AddStudentVerifyCode,

};
