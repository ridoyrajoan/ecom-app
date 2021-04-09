import create from 'zustand';

const useStore = create((set) => ({
    logo: ['eCommerce App'],
    addLogo: (logos) => set((state) =>({logo: [...state.logo, logos]})),

    title: ['All Products'],
    addTitle: (title1) => set((state) =>({title: [...state.title, title1]})),
}))

export default useStore;