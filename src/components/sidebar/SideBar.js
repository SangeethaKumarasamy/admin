import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';


export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <LineStyleIcon className="sidebarIcon" />
            Home
          </li>
          <li className="sidebarListItem">
            <TimelineIcon className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUpIcon className="sidebarIcon" />
            Sales
          </li>
        </ul>
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <PersonOutlineIcon className="sidebarIcon" />
           Users
          </li>
          <li className="sidebarListItem">
            <StorefrontIcon className="sidebarIcon" />
            Products
          </li>
          <li className="sidebarListItem">
            <AttachMoneyIcon className="sidebarIcon" />
            Transactions
          </li>
          <li className="sidebarListItem">
            <BarChartIcon className="sidebarIcon" />
            Reports
          </li>
        </ul>
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <MailOutlineIcon className="sidebarIcon" />
           Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeedOutlinedIcon className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutlineIcon className="sidebarIcon" />
            Messages
          </li>
        </ul>
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <WorkOutlineOutlinedIcon className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <TimelineIcon className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            < ReportIcon className="sidebarIcon" />
           Reports
          </li>
        </ul>
      </div>
    </div>
  );
}
