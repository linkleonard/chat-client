import { mount } from '@vue/test-utils';
import UserMessage from '@/components/UserMessage';


const testUserID = 'test-id';
const testMessageText = 'test-message';
const testMessage = { text: testMessageText, user: testUserID };
const testUserPictureUri = 'my-picture';
const testUser = {
  id: testUserID,
  picture: testUserPictureUri,
};
const allUsers = { [testUserID]: testUser };


describe('UserMessage.vue', () => {
  it('should render for missing session', () => {
    const wrapper = mount(UserMessage, {
      propsData: {
        message: testMessage,
        users: allUsers,
      },
    });

    expect(wrapper.find('span').text())
      .toEqual(testMessageText);
    expect(wrapper.find('img').attributes().src)
      .toEqual(testUserPictureUri);
    expect(wrapper.classes())
      .toHaveLength(0);
  });

  it('should render for session missing user', () => {
    const wrapper = mount(UserMessage, {
      propsData: {
        message: testMessage,
        users: allUsers,
        session: {},
      },
    });

    expect(wrapper.find('span').text())
      .toEqual(testMessageText);
    expect(wrapper.find('img').attributes().src)
      .toEqual(testUserPictureUri);
    expect(wrapper.classes())
      .toHaveLength(0);
  });

  it('should render for message sender', () => {
    const wrapper = mount(UserMessage, {
      propsData: {
        message: testMessage,
        users: allUsers,
        session: { user: testUserID },
      },
    });

    expect(wrapper.find('span').text())
      .toEqual(testMessageText);
    expect(wrapper.find('img').attributes().src)
      .toEqual(testUserPictureUri);
    expect(wrapper.classes())
      .toContain('is-session-user');
  });
});
