import { mount } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm';


describe('RegisterForm.vue', () => {
  it('should render', () => {
    const wrapper = mount(RegisterForm, {
      props: { onSubmit: () => null },
    });

    expect(wrapper.find('label').find('input'))
      .toBeDefined();
  });

  it('should call callback on success', () => {
    const callback = jest.fn();
    const wrapper = mount(RegisterForm, {
      propsData: {
        onSubmit: callback,
      },
    });

    wrapper.trigger('submit');
    expect(callback.mock.calls.length).toBe(1);
  });
});
