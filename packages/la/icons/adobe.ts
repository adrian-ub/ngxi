import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAdobeIcon],svg[la-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v20l8.9-20zm15.1 0L28 26V6zM16 13.4L12.1 22h4.097l1.6 4H21.6z"></svg:path>`,
})
export class LaAdobeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
