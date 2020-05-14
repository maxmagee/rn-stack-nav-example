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

const JobNavigator = createStackNavigator(
  {
    JobAddEdit: JobAddEditScreen,
    JobDetails: JobDetailsScreen,
    JobList: JobListScreen,
  },
  {
    initialRouteName: "JobList",
  }
);

const PartsNavigator = createStackNavigator(
  {
    PartDetails: PartDetailsScreen,
    PartsAddEdit: PartsAddEditScreen,
    PartsList: PartsListScreen,
  },
  {
    initialRouteName: "PartsList",
  }
);

const FirstAidNavigator = createStackNavigator(
  {
    FirstAidAddEdit: FirstAidAddEditScreen,
    FirstAidDetails: FirstAidDetailsScreen,
    FirstAidList: FirstAidListScreen,
  },
  {
    initialRouteName: "FirstAidList",
  }
);

const VesselNavigator = createStackNavigator(
  {
    FirstAid: FirstAidNavigator,
    Jobs: JobNavigator,
    Parts: PartsNavigator,
    VesselDetails: VesselDetailsScreen,
    VesselList: VesselListScreen,
  },
  {
    initialRouteName: "VesselList",
  }
);

const CrewNavigator = createStackNavigator(
  {
    CrewMemberDetails: CrewMemberDetailsScreen,
    CrewMemberList: CrewMemberListScreen,
  },
  {
    initialRouteName: "CrewMemberList",
  }
);

const AccountNavigator = createStackNavigator(
  {
    MyAccount: MyAccountScreen,
  },
  {
    initialRouteName: "MyAccount",
  }
);

const MainNavigator = createStackNavigator(
  {
    Account: AccountNavigator,
    Crew: CrewNavigator,
    Dashboard: DashboardScreen,
    Login: LoginScreen,
    Vessels: VesselNavigator,
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(MainNavigator);
