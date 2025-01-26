import { useRouter } from "next/router"

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    <div>
        <h1>Hello from about page number {pageNumber}</h1>
    </div>
  )
}

export default pageNo