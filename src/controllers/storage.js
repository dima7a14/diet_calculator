const KEY = 'diet_calculator_app';

const defaultSchema = {
  firstName: '',
  lastName: '',
  sex: null,
  age: 20,
};

export function read() {
  try {
    const schema = JSON.parse(localStorage.getItem(KEY) || 'null') || {};

    return { ...defaultSchema, ...schema };
  } catch (err) {
    console.error('AppStorage error on read', err); // eslint-disable-line no-console
    return defaultSchema;
  }
}

export function write(data) {
  try {
    const schema = read();
    localStorage.setItem(KEY, JSON.stringify({ ...schema, ...data }));
  } catch (err) {
    console.error('AppStorage error on write', err); // eslint-disable-line no-console
  }
}

export function clear() {
  localStorage.clear();
}
