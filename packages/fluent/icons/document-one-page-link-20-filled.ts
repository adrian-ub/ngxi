import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentOnePageLink20FilledIcon],svg[fluent-document-one-page-link-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.05a3.5 3.5 0 0 1 2.45-6h4q.255 0 .5.035V4a2 2 0 0 0-2-2zm1.5 4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M9 15.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5A2.5 2.5 0 0 1 9 15.5m6-2.5a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-4-5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentDocumentOnePageLink20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
