import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import { theme } from '../src/theme';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

ConfigProvider.config({
  theme,
});

export const decorators = [
  (Story) => (
    <ConfigProvider>
      <Story />
    </ConfigProvider>
  ),
];
