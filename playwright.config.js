export const use = {
  browserName: 'chromium',
  headless: false,
  screenshot: 'only-on-failure',

};
export const retries = 0;
export const reporter = [['html'], ['list']];