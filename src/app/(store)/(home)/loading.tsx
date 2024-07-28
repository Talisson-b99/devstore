import Skeleton from '@/components/skeleton'

const Loading = () => {
  return (
    <div className="grid max-h-[860px] min-h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[860px]"></Skeleton>
      <Skeleton className="col-span-3 row-span-3"></Skeleton>
      <Skeleton className="col-span-3 row-span-3"></Skeleton>
    </div>
  )
}

export default Loading
