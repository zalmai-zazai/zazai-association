import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Add Member",
    icon: IconUserPlus,
    // icon: IconAperture,
    href: "/add-member",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  // {
  //   id: uniqueId(),
  //   title: "Typography",
  //   icon: IconTypography,
  //   href: "/utilities/typography",
  // },
  {
    id: uniqueId(),
    title: "Regulations   ترزالعمال",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCopy,
  //   href: "/utilities/shadow",
  // },
  {
    id: uniqueId(),
    title: "Future Plans  راتلونکی پلانونه",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
  {
    id: uniqueId(),
    title: "Gallery",
    icon: IconLayoutDashboard,
    href: "/icons",
  },
];

export default Menuitems;
