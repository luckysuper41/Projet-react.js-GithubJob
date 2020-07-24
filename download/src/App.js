import React, { useState } from 'react';
//npm i axios react-bootstrap
import { Container } from 'react-bootstrap';
import useFetchJobs from './coponent/useFetchJobs';
import Job from './coponent/Job';
import JobsPagination from './coponent/JobsPagination';
import SearchForm from './coponent/SearchForm';
import './app.css';



function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  //dùng để tìm kiếm khi search, bd từ trang 1 đến các trang kế tiếp
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <div className='header'>
        <div className="header-content"><span>GitHub</span> Jobs</div>
      </div>
    
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error. Try Refreshing.</h2>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  )
}

export default App;
