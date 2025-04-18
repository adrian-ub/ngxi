import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAdobeIcon],svg[fontisto-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.097 0h10.025v24zm-7.063 0H0v24zm-.853 19.171l4.384-10.329l6.386 15.156h-4.184l-1.91-4.827z"></svg:path>`,
})
export class FontistoAdobeIcon {
  readonly viewBox = input("0 0 27 24")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
