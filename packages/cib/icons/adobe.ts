import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAdobeIcon],svg[cib-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.136 2.667H32v26.667zm-8.272 0H0v26.667zM16 12.531l7.469 16.803h-5.068l-2.136-5.333h-5.463z"></svg:path>`,
})
export class CibAdobeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
