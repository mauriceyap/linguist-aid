import { FunctionComponent, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IScrollToTopProps extends RouteComponentProps {}

const ScrollToTop: FunctionComponent<IScrollToTopProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  });

  return null;
};

export default withRouter(ScrollToTop);
