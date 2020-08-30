<template>
  <fish-segment class="settings">
    <fish-form>
      <fish-field label="First name" :rules="[{required: true}]">
        <fish-input v-model.trim="firstName"></fish-input>
      </fish-field>
      <fish-field label="Last name" :rules="[{required: true}]">
        <fish-input v-model.trim="lastName"></fish-input>
      </fish-field>
      <fish-field label="Sex" :rules="[{required: true}]">
        <fish-select v-model="sex">
          <fish-option index="male" content="Male"></fish-option>
          <fish-option index="female" content="Female"></fish-option>
        </fish-select>
      </fish-field>
      <fish-field label="Age" :rules="[{required: true}]">
        <fish-input-number
          min="0"
          max="200"
          v-model="age"
        ></fish-input-number>
      </fish-field>
      <fish-field label="Weight, (kg)" :rules="[{required: true}]">
        <fish-input-number
          min="0"
          v-model="weight"
        ></fish-input-number>
      </fish-field>
      <fish-field label="Height, (cm)" :rules="[{required: true}]">
        <fish-input-number
          min="0"
          max="300"
          v-model="height"
        ></fish-input-number>
      </fish-field>
      <fish-field label="Activity level" :rules="[{required: true}]">
        <fish-select v-model.number="activity">
          <fish-option :index="1.2" content="Minimal activity"></fish-option>
          <fish-option :index="1.375" content="Weak activity"></fish-option>
          <fish-option :index="1.55" content="Average activity"></fish-option>
          <fish-option :index="1.725" content="High activity"></fish-option>
          <fish-option :index="1.9" content="Extra activity"></fish-option>
        </fish-select>
      </fish-field>
      <fish-message v-if="calorieLevel" type="success">
        Youre calorie level is <strong>{{ Math.round(calorieLevel) }}</strong> cal.
      </fish-message>
      <fish-button
        type="primary"
        size="large"
        class="btn"
        @click.prevent="save"
      >Save</fish-button>
    </fish-form>
  </fish-segment>
</template>

<script>
import { mapGetters } from 'vuex';

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
      weight,
      height,
      activity,
    } = this.$store.state;

    return {
      firstName,
      lastName,
      sex,
      age,
      weight,
      height,
      activity,
    };
  },
  computed: {
    ...mapGetters(['calorieLevel']),
  },
  methods: {
    save() {
      // TODO: add validation?
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        sex: this.sex,
        age: this.age,
        weight: this.weight,
        height: this.height,
        activity: this.activity,
      };

      this.$store.dispatch('saveUserParams', data);
    },
  },
};
</script>

<style scoped>
.settings {
  width: 100%;
  max-width: 480px;
  margin: auto;
}
.btn {
  margin: 1em auto 0;
  max-width: 120px;
}
</style>
