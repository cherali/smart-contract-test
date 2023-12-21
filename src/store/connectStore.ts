import { StateCreator, create } from 'zustand'

interface ConnectState {
  isConnected?: boolean
}

interface ConnectAction {
  setIsConnected: (isConnected: boolean) => void
}

type ConnectStoreProps = ConnectState & ConnectAction

const connectStore: StateCreator<ConnectStoreProps, [], []> = set => ({
  isConnected: false,
  setIsConnected: isConnected => set(() => ({ isConnected })),
})

export const useConnectStore = create<ConnectStoreProps>()(connectStore)
