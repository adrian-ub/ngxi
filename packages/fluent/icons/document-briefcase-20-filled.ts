import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentBriefcase20FilledIcon],svg[fluent-document-briefcase-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-3.55q.05-.243.05-.5v-4a2.5 2.5 0 0 0-2.042-2.458A2.5 2.5 0 0 0 6.5 9h-2q-.257 0-.5.05V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM3 11.5v.5h-.5A1.5 1.5 0 0 0 1 13.5v4A1.5 1.5 0 0 0 2.5 19h6a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 8.5 12H8v-.5A1.5 1.5 0 0 0 6.5 10h-2A1.5 1.5 0 0 0 3 11.5m1.5-.5h2a.5.5 0 0 1 .5.5v.5H4v-.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentDocumentBriefcase20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
