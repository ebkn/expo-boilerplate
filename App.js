export default process.env.STORYBOOK_ENABLED
  ? require('./storybook').default
  : require('./src/index').default;
