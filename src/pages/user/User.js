  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import PermIdentityIcon from '@mui/icons-material/PermIdentity';
  import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
  import PublishIcon from '@mui/icons-material/Publish';
  import { Link } from "react-router-dom";
  import "./user.css";
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NE6p5F-UjN4y5Zk8Cb08JIjRjeE2-lfsCQ&usqp=CAU"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Sangeetha Kumarasamy</span>
                <span className="userShowUserTitle">Web Developer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon" />
                <span className="userShowInfoTitle">sangee77</span>
              </div>
              <div className="userShowInfo">
                < CalendarTodayIcon className="userShowIcon" />
                <span className="userShowInfoTitle">07-04-1995</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon" />
                <span className="userShowInfoTitle">+91 98765 43210</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon" />
                <span className="userShowInfoTitle">sangeetha@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Tamilnadu | INDIA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="sangee77"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Sangeetha Kumarasamy"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="sangeetha@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Tamilnadu | INDIA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NE6p5F-UjN4y5Zk8Cb08JIjRjeE2-lfsCQ&usqp=CAU"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }