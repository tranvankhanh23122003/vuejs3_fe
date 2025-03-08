<template>
    <a-card title="Tạo mới tài khoản" style="width: 100%;">
        <div class="row">
            <div class="col-4">
                <div class="avatar d-flex justify-content-center">
                    <a-avatar shape="square" :size="200">
                        <template #icon>
                            <img src="../../../assets/icondoreamon.png" alt="Avatar">
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
                        <span>Tình trạng</span>
                    </div>
                    <div class="col-5">
                        <a-select show-search placeholder="chọn tình trạng" style="width: 100%" :options="[]"
                            :filter-option="[]"></a-select>
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-end">
                        <span class="text-danger me-1">*</span>
                        <span>Tên tài khoản</span>
                    </div>
                    <div class="col-5">
                        <a-input placeholder="Nhập tên tài khoản" allow-clear />
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-end">
                        <span class="text-danger me-1">*</span>
                        <span>Họ và Tên</span>
                    </div>
                    <div class="col-5">
                        <a-input placeholder="Nhập Họ và Tên" allow-clear />
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-end">
                        <span class="text-danger me-1">*</span>
                        <span>Email</span>
                    </div>
                    <div class="col-5">
                        <a-input placeholder="Nhập Email" allow-clear />
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-end">
                        <span class="text-danger me-1">*</span>
                        <span>Phòng ban</span>
                    </div>
                    <div class="col-5">
                        <a-select show-search placeholder="chọn phòng ban" style="width: 100%" :options="[]"
                            :filter-option="[]"></a-select>
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-end">
                        <span class="text-danger me-1">*</span>
                        <span>Mật khẩu</span>
                    </div>
                    <div class="col-5">
                        <a-input-password placeholder="Nhập Mật khẩu" allow-clear />
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-end">
                        <span class="text-danger me-1">*</span>
                        <span>Xác nhận Mật khẩu</span>
                    </div>
                    <div class="col-5">
                        <a-input-password placeholder="Xác nhận Mật khẩu" allow-clear />
                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>

        </div>
        <div class="row mt-3" >
            <div class="col-12 btn-cancle-save">
                <router-link>
                    <button class="btn-cancle">
                        <span>Hủy</span>
                    </button></router-link>

                <router-link :to="{name:'admin-users'}">
                    <button class="btn-save">
                        <span>Lưu</span>
                    </button>
                </router-link>
            </div>
        </div>
    </a-card>
</template>
<script setup>
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
.btn-cancle{
border: none;
cursor: pointer;
border-radius: 6px;
margin-right: 10px;
width: 60px;


}
.btn-save{
    border: none;
background: #007bff;
color: white;
cursor: pointer;
border-radius: 6px;
width: 60px;

}
.btn-cancle-save{
display: flex;
justify-content: flex-end;
}
</style>
