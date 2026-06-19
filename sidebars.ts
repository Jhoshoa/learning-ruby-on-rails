import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  rubySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Ruby Basics',
      items: [
        'ruby-basics/philosophy',
        'ruby-basics/variables',
        'ruby-basics/data-types',
        'ruby-basics/control-flow',
        'ruby-basics/methods',
        'ruby-basics/collections',
        'ruby-basics/blocks-iterators',
      ],
    },
    {
      type: 'category',
      label: 'Object-Oriented Programming',
      items: [
        'oop/classes-and-objects',
        'oop/modules-and-mixins',
        'oop/inheritance',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Ruby',
      items: [
        'advanced/blocks-procs-lambdas',
        'advanced/metaprogramming',
        'advanced/error-handling',
        'advanced/file-io',
      ],
    },
    {
      type: 'category',
      label: 'Ruby on Rails',
      items: [
        'ruby-on-rails/getting-started',
        'ruby-on-rails/mvc',
        'ruby-on-rails/active-record',
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/testing-intro',
        'testing/rspec',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'best-practices/code-style',
        'best-practices/gems-bundler',
      ],
    },
  ],
};

export default sidebars;
