import React from 'react';

function Sidebar() {

  const style = {
    color: 'red',
    fontSize: 21
  }

  return (
    <section className="sidebar">
      <form className="sidebar__form1 sidebar__child sidebar__border">
        <label htmlFor="sidebar__form1--starred label">Filter Starred Ideas</label>
        <button className="sidebar__form1--button sidebar--button" type="button">Show Starred Ideas</button>
      </form>
      <h2 className="label sidebar__border">Filter by Quality</h2>
      <article className="sidebar__list sidebar__child">
        <p className="sidebar__list--swill item">Swill</p>
        <p className="sidebar__list--plausible item">Plausible</p>
        <p className="sidebar__list--genius item">Genius</p>
      </article>
      <form className="sidebar__form2 sidebar__child sidebar__border">
        <label className="sidebar__form2--quality label" htmlFor="new-quality">New Quality</label>
        <input className="sidebar__form2--input" type="text" name="new-quality" id="new-quality--input" />
        <button className="sidebar__form2--button sidebar--button" type="button">Add New Quality</button>
      </form>
    </section>
  )
}

export default Sidebar;