import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFlowchart20FilledIcon],svg[fluent-document-flowchart-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5m-4 1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8v1.793L9.207 13H11v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H9.207l-1.353 1.354a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708L7 11.793V10h-.5a.5.5 0 0 1-.5-.5zm5-1V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentDocumentFlowchart20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
