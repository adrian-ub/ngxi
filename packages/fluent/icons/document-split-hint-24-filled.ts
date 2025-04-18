import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentSplitHint24FilledIcon],svg[fluent-document-split-hint-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V2H6a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-8 5.75a.75.75 0 0 0-1.5 0v2.495a.75.75 0 0 0 1.5 0zM19.25 13a.75.75 0 0 1 .75.75v2.495a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75m-9 7.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-5.5-2a.75.75 0 0 1 .75.75V20a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H6a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75m13.75.75a.75.75 0 0 1 1.5 0V20a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H18a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class FluentDocumentSplitHint24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
