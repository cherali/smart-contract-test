import { StateCreator, create } from 'zustand'

interface MintState {
  mint: string
}

interface MintAction {
  setMint: (mint: string) => void
}

type MintStoreProps = MintState & MintAction

const mintStore: StateCreator<MintStoreProps, [], []> = set => ({
  mint: '',
  setMint: mint => set(() => ({ mint })),
})

export const useMintStore = create<MintStoreProps>()(mintStore)
