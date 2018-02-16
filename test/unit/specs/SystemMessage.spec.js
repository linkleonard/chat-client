import { mount } from '@vue/test-utils';
import SystemMessage from '@/components/SystemMessage';


const testMessageText = 'test-message';

describe('SystemMessage.vue', () => {
  it('should render', () => {
    const wrapper = mount(SystemMessage, {
      slots: {
        default: [testMessageText],
      },
    });

    expect(wrapper.find('span').text())
      .toEqual(testMessageText);
  });
});
