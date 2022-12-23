onSearchChange = event => {
    this.setState({
      searchField: event.target.value,
      title: event.target.value
    });
  }