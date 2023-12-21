import { StateCreator, create } from 'zustand'

interface StepState {
  step: number
}

interface StepAction {
  setStep: (step: number) => void
}

type StepStoreProps = StepState & StepAction

const stepStore: StateCreator<StepStoreProps, [], []> = set => ({
  step: 0,
  setStep: step => set(() => ({ step })),
})

export const useStepStore = create<StepStoreProps>()(stepStore)
