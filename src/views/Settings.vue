<template>
  <div class="v-settings">
    <form>
      <p>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" v-model.trim="firstName" required />
      </p>
      <p>
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" v-model.trim="lastName" required />
      </p>
      <p>
        <label for="male">Male</label>
        <input type="radio" id="male" value="male" v-model="sex" />
        <br />
        <label for="female">Female</label>
        <input type="radio" id="female" value="female" v-model="sex" />
      </p>
      <p>
        <label for="age">Age</label>
        <input type="number" id="age" v-model.number="age" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'v-settings',
  components: {},
  props: {},
  data() {
    return {
      firstName: '',
      lastName: '',
      sex: null,
      age: 20,
    };
  },
};
</script>

<style scoped></style>
