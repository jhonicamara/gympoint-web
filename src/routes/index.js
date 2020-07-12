import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

// Student Components
import ListStudents from '~/pages/Student/ListStudent';
import NewStudent from '~/pages/Student/NewStudent';
import EditStudents from '~/pages/Student/EditStudent';

// Plan Components
import ListPlan from '~/pages/Plan/ListPlan';
import NewPlan from '~/pages/Plan/NewPlan';
import EditPlan from '~/pages/Plan/EditPlan';

// Enroll Components
import ListEnroll from '~/pages/Enroll/ListEnroll';
import NewEnroll from '~/pages/Enroll/NewEnroll';
import EditEnroll from '~/pages/Enroll/EditEnroll';

// Help Orders Components
import ListHelpOrder from '~/pages/HelpOrder/ListHelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={ListStudents} isPrivate />
      <Route path="/newStudent" exact component={NewStudent} isPrivate />
      <Route path="/students/:id/edit" component={EditStudents} isPrivate />

      <Route path="/plans" exact component={ListPlan} isPrivate />
      <Route path="/newPlan" exact component={NewPlan} isPrivate />
      <Route path="/plans/:id/edit" component={EditPlan} isPrivate />

      <Route path="/enrolls" exact component={ListEnroll} isPrivate />
      <Route path="/newEnroll" exact component={NewEnroll} isPrivate />
      <Route path="/enrolls/:id/edit" component={EditEnroll} isPrivate />

      <Route path="/helpOrders" component={ListHelpOrder} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
