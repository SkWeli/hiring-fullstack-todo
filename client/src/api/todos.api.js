import axiosClient from './axiosClient'

export const getAll = async () => {
  const res = await axiosClient.get('/todos')
  return res.data
}

export const create = async ({ title, description }) => {
  const res = await axiosClient.post('/todos', { title, description })
  return res.data
}

export const update = async (id, { title, description }) => {
  const res = await axiosClient.put(`/todos/${id}`, { title, description })
  return res.data
}

export const toggleDone = async (id) => {
  const res = await axiosClient.patch(`/todos/${id}/done`)
  return res.data
}

export const remove = async (id) => {
  await axiosClient.delete(`/todos/${id}`)
}