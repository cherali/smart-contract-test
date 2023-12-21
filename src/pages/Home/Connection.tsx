import { useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useConnectStore } from '@/store/connectStore'
import { getErrorMessage } from '@/utils/string'
import AppAlert from '@/components/AppAlert/AppAlert'
import AppButton from '@/components/AppButton/AppButton'

const Connection = () => {
  const connected = useConnectStore(s => s.isConnected)
  const setConnected = useConnectStore(s => s.setIsConnected)
  const { connector, isConnected, address } = useAccount()
  const { connect, connectors, error, isError, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    if (connected !== isConnected) {
      setConnected(isConnected)
    }
  }, [isConnected])

  const handleDisconnect = () => disconnect()

  return (
    <section className='shadow-md shadow-cyan-900 border border-cyan-800 rounded-md my-4 p-4 word-break'>
      <h1 className='text-bold text-lg mb-4 underline capitalize text-gray-400'>choose wallet:</h1>
      <section className='flex items-center gap-4'>
        <section>
          {isConnected && (
            <AppButton onClick={handleDisconnect}>Disconnect from {connector?.name}</AppButton>
          )}
        </section>

        {!isConnected && (
          <section className='flex-1'>
            {connectors.map(con => (
              <section key={con.id} className='inline-block'>
                <AppButton disabled={isLoading} onClick={() => connect({ connector: con })}>
                  {con.name}
                  {isLoading && con.id === pendingConnector?.id && ' (connecting)'}
                </AppButton>
              </section>
            ))}
          </section>
        )}
      </section>

      {isConnected && (
        <section className='my-2'>
          <p className='text-sm text-gray-500'>{address}</p>
        </section>
      )}

      {isError && <AppAlert text={getErrorMessage(error)} className='mt-4' />}
    </section>
  )
}

export default Connection
