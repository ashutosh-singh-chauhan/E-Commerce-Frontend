import { useBreakpoint } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const bp = useBreakpoint();

  useEffect(() => {
    if (["base", "xs", "sm", "md"].includes(bp)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [bp]);

  return {
    isMobile,
  };
};

export default useMobile;
