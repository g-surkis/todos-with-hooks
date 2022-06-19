import TodoList from "../components/TodoList"

const delay = async (msec, name) => new Promise((resolve) => {
  console.log(name, msec);
  setTimeout(resolve, msec);
});

const randomNumber = (to, from = 0) => Math.floor(Math.random() * (to - from) + from);

const randomDelay = async (name) => {
  await delay(randomNumber(300, 1000), name)
  return Promise.resolve()
}

class TodoListHttpRepository {

  constructor(transport) {
    this.transport = transport;
  }

  async getLists() {
    const res = await this.transport.get(`/lists`);
    await randomDelay('getLists: ')
    return res.data;
  }

  async createList(list) {
    const res = await this.transport.post(`/lists`, list);
    console.log('createList res: ', res);
    await randomDelay('createList: ')

    return res
  }

  async updateById(list) {
    await this.transport.patch(`/lists/${list.id}`, list);
    await randomDelay('updateById: ')
  }

  async delete(list) {
    await this.transport.delete(`/lists/${list.id}`);
    await randomDelay('delete: ')
  }
}

export default TodoListHttpRepository