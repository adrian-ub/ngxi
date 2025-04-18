import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentHeaderFooter24RegularIcon],svg[fluent-document-header-footer-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.005 6.505a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5m0 11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 1 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5m12.99-13.409A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.25v15.5l.005.154A2.25 2.25 0 0 0 6.25 22h11.5l.154-.005A2.25 2.25 0 0 0 20 19.75V4.25zM6.25 3.5h11.5l.102.007a.75.75 0 0 1 .648.743v15.5l-.007.102a.75.75 0 0 1-.743.648H6.25l-.102-.007a.75.75 0 0 1-.648-.743V4.25l.007-.102A.75.75 0 0 1 6.25 3.5"></svg:path>`,
})
export class FluentDocumentHeaderFooter24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
