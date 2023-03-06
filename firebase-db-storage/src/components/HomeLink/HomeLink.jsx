import { PropTypes } from 'prop-types';
import classes from './HomeLink.module.scss';
import { getPathFromBaseUrl } from '@/utils';

/* Component ---------------------------------------------------------------- */

export function HomeLink({ children }) {
  return (
    <h1 className={classes.HomeLink}>
      <link to={getPathFromBaseUrl()}>{children}</link>
    </h1>
  );
}

HomeLink.propTypes = {
  children: PropTypes.node,
};
