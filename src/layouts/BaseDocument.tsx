import type { ReactNode } from "react";

interface BaseDocumentProps {
  children?: ReactNode;
}

const BaseDocument = ({ children }: BaseDocumentProps) => {
  return <>{children}</>;
};

export default BaseDocument;
