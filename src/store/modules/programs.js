export default {
  namespaced: true,
  state: {
    list: [{
      id: 1,
      title: 'Программа 1',
      img: '/img/1.jpg',
      city: 'Абакан',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum explicabo aspernatur alias numquam? Laboriosam nisi est debitis, beatae error fugiat molestias voluptas numquam iusto aliquam ipsum eum ex quam? Repellat cum esse deserunt nihil voluptate excepturi. Cumque dolores nam ipsa. Voluptas cum voluptatum quos? Sequi, quod. Accusantium amet veritatis velit!',
      time: '',
      price: '',
      nav: 'Массаж',
      subnav: 'Общий'
    },
    {
      id: 2,
      title: 'Программа 2',
      img: '/img/2.jpg',
      city: 'Абакан',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum explicabo aspernatur alias numquam? Laboriosam nisi est debitis, beatae error fugiat molestias voluptas numquam iusto aliquam ipsum eum ex quam? Repellat cum esse deserunt nihil voluptate excepturi. Cumque dolores nam ipsa. Voluptas cum voluptatum quos? Sequi, quod. Accusantium amet veritatis velit!',
      time: '',
      price: '',
      nav: 'Массаж',
      subnav: 'Релакс'
    },
    {
      id: 2,
      title: 'Программа 3',
      img: '/img/3.jpg',
      city: 'Абакан',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum explicabo aspernatur alias numquam? Laboriosam nisi est debitis, beatae error fugiat molestias voluptas numquam iusto aliquam ipsum eum ex quam? Repellat cum esse deserunt nihil voluptate excepturi. Cumque dolores nam ipsa. Voluptas cum voluptatum quos? Sequi, quod. Accusantium amet veritatis velit!',
      time: '',
      price: '',
      nav: 'SPA для нее',
      subnav: 'Расслабляющие'
    }]
  },
  getters: {
    list(state){
      return state.list
    }
  }
}