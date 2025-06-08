import './App.css';
import BubbleCanvas from "./bableBackground/BubbleCanvas"
import Header from "./Header/Header"
import Invited from "./MainPage/Invited"
import BirthdayInvitationForm from './Formik/BirthdayInvitation';
import Date from './date/date'
import Location from './location/location'

function App() {
  return (
    <div className='page'>
      <BubbleCanvas />
      <Header/>
      <Invited/>
      <Date/>
      <Location/>
      <BirthdayInvitationForm/>
    </div>
  );
}

export default App;
