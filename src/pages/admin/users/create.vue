<template>
    <form @submit.prevent="createUsers">
        <a-card title="Tạo mới tài khoản" style="width: 100%;">
            <div class="row">
                <div class="col-4">
                    <div class="avatar d-flex justify-content-center">
                        <a-avatar shape="square" :size="200">
                            <template #icon>
                                <img src="../../../assets/icondoreamon.png" alt="Avatar">
                                <!-- <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/476148410_122198956124187414_4257261928995722873_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ilYy-2cZUykQ7kNvgEkGg-s&_nc_oc=AdiG6GT3jEH5q4vwXMF2rD9Q6nuUzaC-G8hgEql470Zn0LXoa3aYrVa8hS_SQgbKMe4&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AWJlvRlpzVF9asm5LrAkX7J&oh=00_AYFzDgzULzkgn7vgj-hiP6xxgc98ilNpLx_NEmnspTcv9g&oe=67D4F23D" alt="Avatar"> -->
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
                                v-model:value="users.status" 
                                :class="{ 'select-danger': errors?.status }">
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
                                v-model:value="users.department_id"
                                :class="{ 'select-danger': errors?.department_id }">
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
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.password }">Mật khẩu</span>
                        </div>
                        <div class="col-5">
                            <a-input-password placeholder="Nhập Mật khẩu" allow-clear v-model:value="users.password"
                            :class="{ 'input-danger': errors?.password }"  />
                        </div>
                        <div class="w-100 valaditon-password text-danger">
                                <span v-if="errors?.password">{{ errors?.password[0] }}</span>
                            </div>
                        <div class="col">

                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 text-end">
                            <span class="text-danger me-1">*</span>
                            <span :class="{ 'text-danger': errors?.password }">Xác nhận Mật khẩu</span>
                        </div>
                        <div class="col-5">
                            <a-input-password placeholder="Xác nhận Mật khẩu" allow-clear
                                v-model:value="users.password_confirmation" 
                                :class="{ 'input-danger': errors?.password_confirmation}" />
                                <div class="w-100 text-danger">
                                <span v-if="errors?.password_confirmation">{{ errors?.password_confirmation[0] }}</span>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>

                </div>

            </div>
            <div class="row mt-3">
                <div class="col-12 btn-cancle-save">
                    <router-link :to="{}">
                        <button class="btn-cancle">
                            <span>Hủy</span>
                        </button></router-link>

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
import axios from 'axios';
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
    status: []
});
const errors = ref({

})

const createUsers = () => {
    axios.post("http://127.0.0.1:8000/api/users", users)
        .then((response) => {
            console.log("response", response);
        })
        .catch((error) => {
            console.log()
            errors.value = error.response.data.errors;
        })

}
const users_status = ref([]);
const departments = ref([]);
const getUserCreate = () => {
    axios.get("http://127.0.0.1:8000/api/users/create")
        .then((response) => {
            users_status.value = response.data.users_status;
            departments.value = response.data.departments;
        })
        .catch((error) => {
            console.log("lỗi api", error)
        })
}
getUserCreate();

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
.input-danger{
    border: 1px solid red;

    
}
.valaditon-password{
    margin-left: 180px ;
}
</style>
