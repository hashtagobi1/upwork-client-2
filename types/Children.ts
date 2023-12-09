interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
export type ChildrenType =
  | React.ReactChild
  | ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;
