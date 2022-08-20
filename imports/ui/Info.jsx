import React, { useContext } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';
import { TestContext } from './context';

const Info = ({ links, contextValue }) => {
  return (
    <div>
      <h2>Learn Meteor!</h2>
      <h4>Value from context: { contextValue }</h4>

      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};

export default withTracker(()=>{
    const contextValue = useContext(TestContext);

    return {
        links: LinksCollection.find().fetch(),
        contextValue
    }
})(Info);
