import React from "react";

export default props => (
  <div className="List">
    <table class="table">
      <thead>
        <tr>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {props.emails.map((email, i) => (
              <li key={i}>{email}</li>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
