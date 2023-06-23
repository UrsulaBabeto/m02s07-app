function FindUser() {
    const { FormData } = useContext(FormContext);
  function findUSer(user) {
    user ? <p>FormData</p> : <p>Usuario não cadastrado</p>;
  }
  return (
    <>
      <div class="container-fluid">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            onClick={findUSer}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default FindUser;
