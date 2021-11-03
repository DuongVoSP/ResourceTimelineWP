import * as React from "react";
import styles from "./ResourceTimelineWp.module.scss";
import { IResourceTimelineWpProps } from "./IResourceTimelineWpProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { DummyTimeline } from "./DummyTimeline";

export default class ResourceTimelineWp extends React.Component<IResourceTimelineWpProps, {}> {
  public render(): React.ReactElement<IResourceTimelineWpProps> {
    return (
      <DummyTimeline />
    );
  }
}
