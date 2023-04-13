import React from "react";
import { useHasPermission } from "src/hooks/useHasPermission";

export const HasPermission = ({
    accessWith,
    requireAll,
    children,
  }) => {
    const hasPermission = useHasPermission(accessWith, requireAll);
    if (!hasPermission) return null;
  
    return <>{children}</>;
  };
  