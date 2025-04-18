import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentSplitHint20FilledIcon],svg[fluent-document-split-hint-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM5 12a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM5 15.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1zm11 0a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2zM9 17a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDocumentSplitHint20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
