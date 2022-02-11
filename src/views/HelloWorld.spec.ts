import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('props is sent', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        name: 'name',
      },
    });

    expect(wrapper.text()).toContain('name');
  });
});
