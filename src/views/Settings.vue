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
      <button type="button" @click.prevent="save">Save</button>
    </form>
  </div>
</template>

<script>
import { read, write } from '@/controllers/storage';

export default {
  name: 'v-settings',
  components: {},
  props: {},
  data() {
    const {
      firstName,
      lastName,
      sex,
      age,
    } = read();

    return {
      firstName,
      lastName,
      sex,
      age,
    };
  },
  methods: {
    save() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        sex: this.sex,
        age: this.age,
      };

      write(data);
    },
  },
};
</script>

<style scoped></style>
