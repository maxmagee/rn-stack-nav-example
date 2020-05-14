import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import JobListScreen from "../screens/job/JobListScreen";
import JobDetailsScreen from "../screens/job/JobDetailsScreen";
import JobAddEditScreen from "../screens/job/JobAddEditScreen";
import PartsListScreen from "../screens/parts/PartsListScreen";
import PartDetailsScreen from "../screens/parts/PartDetailsScreen";
import PartsAddEditScreen from "../screens/parts/PartsAddEditScreen";
import FirstAidListScreen from "../screens/firstAid/FirstAidListScreen";
import FirstAidDetailsScreen from "../screens/firstAid/FirstAidDetailsScreen";
import FirstAidAddEditScreen from "../screens/firstAid/FirstAidAddEditScreen";
import VesselListScreen from "../screens/vessel/VesselListScreen";
import VesselDetailsScreen from "../screens/vessel/VesselDetailsScreen";
import CrewMemberListScreen from "../screens/crew/CrewMemberListScreen";
import CrewMemberDetailsScreen from "../screens/crew/CrewMemberDetailsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";

const MainNavigator = createStackNavigator(
  {
    CrewMemberDetails: CrewMemberDetailsScreen,
    CrewMemberList: CrewMemberListScreen,
    Dashboard: DashboardScreen,
    FirstAidAddEdit: FirstAidAddEditScreen,
    FirstAidDetails: FirstAidDetailsScreen,
    FirstAidList: FirstAidListScreen,
    JobAddEdit: JobAddEditScreen,
    JobDetails: JobDetailsScreen,
    JobList: JobListScreen,
    Login: LoginScreen,
    MyAccount: MyAccountScreen,
    PartDetails: PartDetailsScreen,
    PartsAddEdit: PartsAddEditScreen,
    PartsList: PartsListScreen,
    VesselDetails: VesselDetailsScreen,
    VesselList: VesselListScreen,
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(MainNavigator);
