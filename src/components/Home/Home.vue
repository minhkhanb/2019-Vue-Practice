<template>
  <div id="app">
    <div class="greenshock">
      <div class="box" ref="box"></div>
    </div>
    <div class="container">
      <div style="margin-top: 2rem; padding-bottom: 1rem;">
        <h1>Make Bootstrap Sexy Again</h1>
      </div>
      <!-- Alerts -->
      <h2>Alerts</h2>
      <div style="padding: 1rem;">
        <div
          v-for="brand in ['success', 'info', 'warning', 'danger']"
          :key="brand"
          class="alert"
          :class="'alert-' + brand"
        >
          <strong>Well done!</strong>
          You successfully read this {{brand}} alert message.
        </div>
      </div>
      <h2>Breadcrumb</h2>
      <div style="padding: 1rem;">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active">Data</li>
        </ol>
      </div>
      <!-- Buttons-->
      <h2>Buttons</h2>
      <div style="padding: 1rem;">
        <div v-for="type in ['', 'outline']" :key="type">
          <span
            v-for="brand in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']"
            :key="brand"
          >
            <button
              role="button"
              class="btn"
              :class="'btn-' + (type.length ? (type + '-') : '') + brand"
              style="margin-bottom: 1rem; margin-right: 1rem;"
            >{{brand}} {{type}}</button>
          </span>
        </div>
      </div>
      <!-- Progress-->
      <h2>Progress</h2>
      <div style="padding: 1rem;">
        <div
          v-for="brand in ['success', 'info', 'warning', 'danger']"
          :key="brand"
          class="progress"
          style="margin-bottom: 1rem;"
        >
          <div
            class="progress-bar"
            :class="'bg-' + brand"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- Notice-->
      <h2>Modal</h2>
      <div style="padding: 1rem;">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Spacing utilities-->
      <h2>Spacing utilities</h2>
      <div style="padding: 1rem;">
        <div
          v-for="brand in ['success', 'info', 'warning', 'danger']"
          :key="brand"
          class="progress"
          style="margin-bottom: 1rem;"
        >
          <div
            class="progress-bar"
            :class="'bg-' + brand"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div id="modal">
      <div v-if="isShowModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="isShowModal = false">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="isShowModal = false"
                    >Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button @click="isShowModal = true" type="button" class="btn btn-primary">Click</button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.scss"></style>
