<template>
  <div class="subheader py-2 py-lg-4" id="kt_subheader">
    <div
      class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
    >
      <div class="d-flex align-items-center flex-wrap mr-1">
        <h5 class="text-dark font-weight-bold my-2 mr-5">
          <!--          {{ title }}-->
        </h5>
        <ul
          class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"
        >
          <li class="breadcrumb-item">
            <router-link :to="'/'" class="subheader-breadcrumbs-home">
              <i class="flaticon2-shelter text-muted icon-1x"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "KTSubheader",
  props: {
    breadcrumbs: Array,
    title: String
  }
};
</script>
