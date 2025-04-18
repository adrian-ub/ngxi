import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentHeaderFooter24FilledIcon],svg[fluent-document-header-footer-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.5a2.25 2.25 0 0 1-2.096 2.245L17.75 22H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2zM7.005 6.505a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3h-7a1.5 1.5 0 0 0-1.5 1.5m0 11a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3h-7a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class FluentDocumentHeaderFooter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
