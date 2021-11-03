import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ResourceTimelineWpWebPartStrings';
import ResourceTimelineWp from './components/ResourceTimelineWp';
import { IResourceTimelineWpProps } from './components/IResourceTimelineWpProps';

export interface IResourceTimelineWpWebPartProps {
  description: string;
}

export default class ResourceTimelineWpWebPart extends BaseClientSideWebPart<IResourceTimelineWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IResourceTimelineWpProps> = React.createElement(
      ResourceTimelineWp,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
