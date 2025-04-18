import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFooter24RegularIcon],svg[fluent-document-footer-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.501 16a1.5 1.5 0 1 0 0 3h7a1.5 1.5 0 0 0 0-3zm11.49-11.908a2.25 2.25 0 0 0-2.245-2.096h-11.5l-.154.005a2.25 2.25 0 0 0-2.096 2.245v15.498l.005.154a2.25 2.25 0 0 0 2.245 2.096h11.5l.154-.005a2.25 2.25 0 0 0 2.096-2.245V4.246zM6.246 3.496h11.5l.102.007a.75.75 0 0 1 .648.743v15.498l-.007.102a.75.75 0 0 1-.743.648h-11.5l-.102-.007a.75.75 0 0 1-.648-.743V4.246l.007-.102a.75.75 0 0 1 .743-.648"></svg:path>`,
})
export class FluentDocumentFooter24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
