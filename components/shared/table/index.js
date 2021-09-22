import React from 'react'

export default function Table({ columns, tableRows }) {
  return (
    <section className="section">
      <div className="container">
        <div className="b-table">
          <div className="table-wrapper has-mobile-cards">
            <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th className="is-checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" value="false" />
                    </label>
                  </th>
                  <th></th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>City</th>
                  <th>Progress</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" checked />
                    </label>
                  </td>
                  <td className="is-image-cell">
                    <div className="image">
                      <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" className="is-rounded" />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="City">South Cory</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress max="100" className="progress is-small is-primary" value="79">79</progress>
                  </td>
                  <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Oct 25, 2020">Oct 25, 2020</small>
                  </td>
                  <td className="is-actions-cell">
                    <div className="buttons is-right">
                      <button className="button is-small is-primary" type="button">
                        <span className="icon"><i className="mdi mdi-eye"></i></span>
                      </button>
                      <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                        <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="is-checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                  </td>
                  <td className="is-image-cell">
                    <div className="image">
                      <img src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg" className="is-rounded" />
                    </div>
                  </td>
                  <td data-label="Name">Felicita Yundt</td>
                  <td data-label="Company">Johns-Weissnat</td>
                  <td data-label="City">East Ariel</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress max="100" className="progress is-small is-primary" value="67">67</progress>
                  </td>
                  <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Jan 8, 2019">Jan 8, 2019</small>
                  </td>
                  <td className="is-actions-cell">
                    <div className="buttons is-right">
                      <button className="button is-small is-primary" type="button">
                        <span className="icon"><i className="mdi mdi-eye"></i></span>
                      </button>
                      <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                        <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="is-checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                  </td>
                  <td className="is-image-cell">
                    <div className="image">
                      <img src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg" className="is-rounded" />
                    </div>
                  </td>
                  <td data-label="Name">Mr. Larry Satterfield V</td>
                  <td data-label="Company">Hyatt Ltd</td>
                  <td data-label="City">Windlerburgh</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress max="100" className="progress is-small is-primary" value="16">16</progress>
                  </td>
                  <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Dec 18, 2020">Dec 18, 2020</small>
                  </td>
                  <td className="is-actions-cell">
                    <div className="buttons is-right">
                      <button className="button is-small is-primary" type="button">
                        <span className="icon"><i className="mdi mdi-eye"></i></span>
                      </button>
                      <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                        <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="is-checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                  </td>
                  <td className="is-image-cell">
                    <div className="image">
                      <img src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg" className="is-rounded" />
                    </div>
                  </td>
                  <td data-label="Name">Mr. Broderick Kub</td>
                  <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                  <td data-label="City">New Kirstenport</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress max="100" className="progress is-small is-primary" value="71">71</progress>
                  </td>
                  <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Sep 13, 2020">Sep 13, 2020</small>
                  </td>
                  <td className="is-actions-cell">
                    <div className="buttons is-right">
                      <button className="button is-small is-primary" type="button">
                        <span className="icon"><i className="mdi mdi-eye"></i></span>
                      </button>
                      <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                        <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="is-checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                    </label>
                  </td>
                  <td className="is-image-cell">
                    <div className="image">
                      <img src="https://avatars.dicebear.com/v2/initials/barry-weber.svg" className="is-rounded" />
                    </div>
                  </td>
                  <td data-label="Name">Barry Weber</td>
                  <td data-label="Company">Schulist, Mosciski and Heidenreich</td>
                  <td data-label="City">East Violettestad</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress max="100" className="progress is-small is-primary" value="80">80</progress>
                  </td>
                  <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Jul 24, 2019">Jul 24, 2019</small>
                  </td>
                  <td className="is-actions-cell">
                    <div className="buttons is-right">
                      <button className="button is-small is-primary" type="button">
                        <span className="icon"><i className="mdi mdi-eye"></i></span>
                      </button>
                      <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                        <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
