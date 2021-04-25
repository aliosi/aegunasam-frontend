<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div class="col-xxl-12">
        <div class="card card-custom bg-diagonal-100 card-stretch gutter-b">
          <!--begin::Body-->
          <div class="card-body p-0 position-relative overflow-hidden">
            <!--begin::Chart-->

            <!--end::Chart-->
            <!--begin::Stats-->
            <div class="card-spacer mt-n55">
              <!--begin::Row-->
              <div class="row m-0">
                <div
                  class="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7"
                >
                  <span
                    class="svg-icon svg-icon-3x svg-icon-warning d-block my-2"
                  >
                    <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
                  </span>
                  <a
                    href="#"
                    class="text-warning font-weight-bold font-size-h6"
                  >
                    Eventos
                  </a>
                </div>
                <div class="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                  <span
                    class="svg-icon svg-icon-3x svg-icon-primary d-block my-2"
                  >
                    <inline-svg
                      src="media/svg/icons/Communication/Add-user.svg"
                    />
                  </span>
                  <a
                    href="#"
                    class="text-primary font-weight-bold font-size-h6 mt-2"
                  >
                    Asociados
                  </a>
                </div>
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row m-0">
                <div class="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                  <span
                    class="svg-icon svg-icon-3x svg-icon-danger d-block my-2"
                  >
                    <inline-svg src="media/svg/icons/Design/Layers.svg" />
                  </span>
                  <a
                    href="#"
                    class="text-danger font-weight-bold font-size-h6 mt-2"
                  >
                    Pagos
                  </a>
                </div>
                <div class="col bg-light-success px-6 py-8 rounded-xl">
                  <span
                    class="svg-icon svg-icon-3x svg-icon-success d-block my-2"
                  >
                    <inline-svg
                      src="media/svg/icons/Communication/Urgent-mail.svg"
                    />
                  </span>
                  <a
                    href="#"
                    class="text-success font-weight-bold font-size-h6 mt-2"
                  >
                    Reportes
                  </a>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Stats-->
            <!--end::Body-->
          </div>
          <!--end::Mixed Widget 1-->
        </div>
      </div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "dashboard",
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Inicio" }]);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
  }
};
</script>
