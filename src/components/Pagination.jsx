import Pagination from "rc-pagination"
import "./Pagination.scss"



export default function PaginationMovies({
  currentPage, totalItems, onChangePage
}) {
  return (
    <Pagination 
      className="pagination"
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    />
  )
}