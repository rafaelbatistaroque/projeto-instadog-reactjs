import React from "react";

const useMedia = (media) => {
  const [match, setMach] = React.useState(null);

  React.useEffect(() => {
    function mudarMatch() {
      const { matches } = window.matchMedia(media);
      setMach(matches);
    }
    mudarMatch();
    window.addEventListener("resize", mudarMatch);
    return () => window.removeEventListener("resize", mudarMatch);
  }, [media]);

  return match;
};

export default useMedia;
