<template>
    <form @submit.prevent="updateUsers()">
        <a-card title="Cập nhật tài khoản" style="width: 100%;">
            <div class="row">
                <div class="col-4">
                    <div class="avatar d-flex justify-content-center">
                        <a-avatar shape="square" :size="200">
                            <template #icon>
                                <img src="../../../assets/icondoreamon.png" alt="Avatar">
                                <!-- <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/476148410_122198956124187414_4257261928995722873_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ilYy-2cZUykQ7kNvgEkGg-s&_nc_oc=AdiG6GT3jEH5q4vwXMF2rD9Q6nuUzaC-G8hgEql470Zn0LXoa3aYrVa8hS_SQgbKMe4&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AWJlvRlpzVF9asm5LrAkX7J&oh=00_AYFzDgzULzkgn7vgj-hiP6xxgc98ilNpLx_NEmnspTcv9g&oe=67D4F23D" -->
                                alt="Avatar">
                            </template>
                        </a-avatar>
                        <button class="btn-select-picture">
                            <i class="fa-solid fa-plus"></i>

                            <span>
                                Chọn ảnh
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.status }">Tình trạng</span>
                        </div>
                        <div class="col-5">
                            <a-select show-search placeholder="chọn tình trạng" style="width: 100%"
                                :options="users_status" :filter-option="filterOption" allow-clear
                                v-model:value="users.status" :class="{ 'select-danger': errors?.status }">
                            </a-select>
                            <div class="w-100 text-danger">
                                <span v-if="errors?.status">{{ errors?.status[0] }}</span>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.username }">Tên tài khoản</span>
                        </div>
                        <div class="col-5">
                            <a-input placeholder="Nhập tên tài khoản" allow-clear v-model:value="users.username"
                                :class="{ 'input-danger': errors?.username }" />
                            <div class="w-100 text-danger">
                                <span v-if="errors?.username">{{ errors?.username[0] }}</span>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.name }">Họ và Tên</span>
                        </div>
                        <div class="col-5">
                            <a-input placeholder="Nhập Họ và Tên" allow-clear v-model:value="users.name"
                                :class="{ 'input-danger': errors?.name }" />
                            <div class="w-100 text-danger">
                                <span v-if="errors?.name">{{ errors?.name[0] }}</span>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.email }">Email</span>
                        </div>
                        <div class="col-5">
                            <a-input placeholder="Nhập Email" allow-clear v-model:value="users.email"
                                :class="{ 'input-danger': errors?.email }" />
                            <div class="w-100 text-danger">
                                <span v-if="errors?.email">{{ errors?.email[0] }}</span>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.department_id }">Phòng ban</span>
                        </div>
                        <div class="col-5">
                            <a-select show-search placeholder="chọn phòng ban" style="width: 100%"
                                :options="departments" :filter-option="filterOption" allow-clear
                                v-model:value="users.department_id" :class="{ 'select-danger': errors?.department_id }">
                            </a-select>
                            <div class="w-100 text-danger">
                                <span v-if="errors?.department_id">{{ errors?.department_id[0] }}</span>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-3 text-end">

                        </div>
                        <div class="col-5">
                            <a-checkbox v-model:checked="change_password">
                                Đổi mật khẩu
                            </a-checkbox>
                        </div>

                        <div class="col">

                        </div>
                    </div>

                    <div class="row mt-3" v-if="change_password">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.password }">Mật khẩu</span>
                        </div>
                        <div class="col-5">
                            <a-input-password placeholder="Nhập Mật khẩu" allow-clear v-model:value="users.password"
                                :class="{ 'input-danger': errors?.password }" />
                        </div>
                        <div class="w-100 valaditon-password text-danger">
                            <span v-if="errors?.password">{{ errors?.password[0] }}</span>
                        </div>
                        <div class="col">

                        </div>
                    </div>
                    <div class="row mt-3" v-if="change_password">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.password_confirmation }">Xác nhận Mật khẩu</span>
                        </div>
                        <div class="col-5">
                            <a-input-password placeholder="Xác nhận Mật khẩu" allow-clear
                                v-model:value="users.password_confirmation"
                                :class="{ 'input-danger': errors?.password_confirmation }" />
                            <div class="w-100 text-danger">
                                <span v-if="errors?.password_confirmation">{{ errors?.password_confirmation[0] }}</span>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span :class="{ 'text-danger': errors?.password_confirmation }">Lần đăng nhập gần
                                đây:</span>
                        </div>
                        <div class="col-5">
                            {{ users.login_at }}
                        </div>
                        <div class="col">

                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span :class="{ 'text-danger': errors?.password_confirmation }">Lần đổi mật khẩu gần
                                đây:</span>
                        </div>
                        <div class="col-5">
                            {{ users.change_password_at }}
                        </div>
                        <div class="col">

                        </div>
                    </div>
                </div>

            </div>
            <div class="row mt-3">
                <div class="col-12 btn-cancle-save">
                    <router-link :to="{ name: 'admin-users' }">
                        <button class="btn-cancle">
                            <span>Hủy</span>
                        </button>
                    </router-link>


                    <button class="btn-save" html-type="submit">
                        <span>Lưu</span>
                    </button>
                </div>
            </div>
        </a-card>
    </form>
</template>
<script setup>
import { reactive, toRef, ref } from 'vue';
import { useMenu } from '../../../store/use-menu';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { data, error } from 'jquery';
import dayjs from 'dayjs';
const menuStore = useMenu();
menuStore.onSelectedKeys(["admin-users"]);
const filterOption = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const users = reactive({
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    department_id: [],
    status: [],
    login_at: "",
    change_password_at: "",
});
const errors = ref({});
const router = useRouter();
const route = useRoute();
const users_status = ref([]);
const departments = ref([]);
const change_password = ref(false); /// 


const getUsersEdit = () => {
    // console.log(`users đang truy suất là ${route.params.id}`)
    axios.get(`http://127.0.0.1:8000/api/users/${route.params.id}/edit`)
        .then((response) => {
            users.username = response.data.users.username;
            users.name = response.data.users.name;
            users.email = response.data.users.email;
            users.department_id = response.data.users.department_id;
            users.status = response.data.users.status;
            // response.data.users.login_at ? users.login_at = response.data.users.login_at : users.login_at = " chưa có lần đăng nhập"
            // response.data.users.change_password_at ? users.change_password_at = response.data.users.change_password_at : users.change_password_at = "Chưa có lần đổi mật khẩu gần đây"
            users.login_at = dayjs(response.data.users.login_at).format('DD/MM/YYYY - HH:mm') || "chưa có lần đăng nhập gần đây";
            users.change_password_at = dayjs(response.data.users.change_password_at).format('DD/MM/YYYY - HH:mm') || " chưa có lần đổi mật khẩu gần đây ";

            departments.value = response.data.departments;
            users_status.value = response.data.users_status;

        })
        .catch((errors) => {
            console.log(errors)

        })

}
const updateUsers = () => {
    console.log('click');
    
    var payload = {
        ...users,
        "change_password": change_password.value
    }
    console.log('pas', payload);
    
    axios.put(`http://127.0.0.1:8000/api/users/${route.params.id}`, payload)  
        .then((response) => {
            errors.value = {}
            if(response.status ==200){
                message.success("Cập nhật tài khoản thành công")
                router.push({name: "admin-users"});       // khi cập nhật thành công sẽ đẩy về trang của đường dẫn
            }
        })
        .catch((error) => {
            errors.value = error.response.data.errors
        })
}
onMounted(() => {
    getUsersEdit();
})
</script>
<style>
.btn-select-picture {
    color: white;
    background: #007bff;
    display: block;
    margin-top: 10px;
    flex-direction: column;
    width: 200px;


}

.avatar {
    display: flex;
    align-items: center;
    flex-direction: column;

}

.btn-cancle {
    border: none;
    cursor: pointer;
    border-radius: 6px;
    margin-right: 10px;
    width: 60px;


}

.btn-save {
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    width: 60px;

}

.btn-cancle-save {
    display: flex;
    justify-content: flex-end;
}

.select-danger {
    border: 1px solid red;
}

.input-danger {
    border: 1px solid red;


}

.valaditon-password {
    margin-left: 180px;
}
</style>