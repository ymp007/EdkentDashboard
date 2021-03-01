import * as CGICONS from "react-icons/cg";
import * as GICONS from "react-icons/gi";
import * as RICONS from "react-icons/ri";
import * as BSICONS from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Menu Option 1',
        path: '/home',
        icon: <CGICONS.CgScreen />
    },
    {
        title: 'Menu Option 2',
        path: '/data',
        icon: <CGICONS.CgBriefcase />,
        iconClosed: <CGICONS.CgMathPlus />,
        iconOpened: <CGICONS.CgMathMinus />,
        subNav: [
            {
                title: 'SubMenu Option 1',
                path: '/officedata',
                icon: <BSICONS.BsFillPersonFill />
            },
            {
                title: 'SubMenu Option 2',
                path: '/productiondata',
                icon: <GICONS.GiFactory />
            }
        ]
    },
    {
        title: 'Menu Option 3',
        path: '/oldFiles',
        icon: <CGICONS.CgFileDocument />,
        iconClosed: <CGICONS.CgMathPlus />,
        iconOpened: <CGICONS.CgMathMinus />,
        subNav: [
            {
                title: 'SubMenu Option 1',
                path: '/officedata',
                icon: <BSICONS.BsFillPersonFill />
            },
            {
                title: 'SubMenu Option 2',
                path: '/productiondata',
                icon: <GICONS.GiFactory />
            }
        ]
    },
    {
        title: 'Menu Option 4',
        path: '/dataanalysis',
        icon: <BSICONS.BsReverseLayoutTextWindowReverse />
    },
    {
        title: 'Menu Option 5',
        path: '/menu5',
        icon: <GICONS.GiMailbox />,
        iconOpened: <BSICONS.BsArrowRight/>,
        iconClosed: <BSICONS.BsArrowRight/>,
        subNav:[]
    },
    {
        title: 'Menu Option 6',
        path: '/menu6',
        icon: <RICONS.RiCheckboxMultipleBlankLine />
    },
    {
        title: 'Menu Option 7',
        path: '/menu7',
        icon: <GICONS.GiCutDiamond />,
        iconOpened: <BSICONS.BsArrowRight/>,
        iconClosed: <BSICONS.BsArrowRight/>,
        subNav:[]
    },
    {
        title: 'Settings',
        path: '/menu8',
        icon: <RICONS.RiSettings3Line/>,
        iconClosed: <BSICONS.BsArrowRight/>
    },

]