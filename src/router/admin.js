const admin = [
    {
        path: "/admin",
        component: () => import("../layout/admin.vue"), 
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import("../pages/admin/users/index.vue") 
            },
            {
                path: "role",
                name: "admin-role",
                component: () => import("../pages/admin/role/index.vue") 
            },
            {
                path: "setting",
                name: "admin-setting",
                component: () => import("../pages/admin/setting/index.vue") 
            }
        ]
    }
];
export default admin;
