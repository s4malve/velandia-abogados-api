const stack = [
  {
    name: 'query',
    params: {},
    path: '',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: true
    }
  },
  {
    name: 'expressInit',
    params: {},
    path: '',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: true
    }
  },
  {
    name: 'corsMiddleware',
    params: {},
    path: '',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: true
    }
  },
  {
    name: 'logger',
    params: {},
    path: '',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: true
    }
  },
  {
    name: 'jsonParser',
    params: {},
    path: '',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: true
    }
  },
  {
    name: 'bound dispatch',
    params: {},
    path: '/',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: false
    },
    route: {
      path: '/',
      stack: [
        {
          name: '<anonymous>',
          keys: [],
          regexp: {
            fast_star: false,
            fast_slash: false
          },
          method: 'get'
        }
      ],
      methods: {
        get: true
      }
    }
  },
  {
    name: 'router',
    keys: [],
    regexp: {
      fast_star: false,
      fast_slash: false
    }
  }
]

type ExpressStack = typeof stack

export default ExpressStack
