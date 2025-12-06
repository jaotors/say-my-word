const Loader = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col items-center gap-8'>
        <div className='h-15 w-64 bg-gray-200 animate-pulse rounded' />
        <div className='h-12 w-100 bg-gray-200 animate-pulse rounded' />
      </div>
      <div className='h-10 w-100 bg-gray-200 animate-pulse rounded' />
    </div>
  )
}

export default Loader
