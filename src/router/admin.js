const admin = [
    {
        path: "/admin",
        component: () => import("../layout/admin.vue"), 
        children: [
            //Quản lý người dùng
            {
                path: "users",
                name: "admin-users",
                component: () => import("../pages/admin/users/index.vue") 
            },        
                {
                path: "users/create",
                name: "admin-users-create",
                component: () => import("../pages/admin/users/create.vue") 
            },
            //Quản lý role
            {
                path: "role",
                name: "admin-role",
                component: () => import("../pages/admin/role/index.vue") 
            },
            //quản lý setting
            {
                path: "setting",
                name: "admin-setting",
                component: () => import("../pages/admin/setting/index.vue") 
            }
        ]
    }
];
export default admin;
