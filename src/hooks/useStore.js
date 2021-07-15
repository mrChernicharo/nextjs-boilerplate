import create from 'zustand';
import { GetServerSideProps } from 'next';

// const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
// const setLocalStorage = (key, value) =>
//   window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create(set => ({
  itemsList: [],
  addItem: item => set(state => ({ itemsList: [...state.itemsList, item] })),
  removeItem: id =>
    set(state => ({
      itemsList: state.itemsList.filter(item => item.id !== id),
    })),
  // localSave: () => set(state => setLocalStorage('itemsList', state))
}));
