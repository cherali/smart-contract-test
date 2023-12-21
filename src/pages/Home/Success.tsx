const Success = () => {
  return (
    <section className='flex flex-col gap-4 items-center py-4'>
      <section className='relative h-32 w-32'>
        <span className='absolute z-10 flex justify-center items-center w-32 h-32 text-8xl'>🗸</span>
        <span className='absolute w-32 h-32 flex justify-center items-center rounded-full bg-green-900' />
      </section>
      <p className='text-green-700 capitalize text-xl font-bold underline'>transfer successful</p>
    </section>
  )
}

export default Success
