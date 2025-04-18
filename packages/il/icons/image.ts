import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilImageIcon],svg[il-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M718 1q10 0 17 6t6 17v510q0 10-6 16t-17 7H23q-10 0-16-7t-7-16V24Q0 14 7 7t16-6zM602 418l-92-162l-93 162l-139-278l-139 278zm-46-185q20 0 33-14t13-33t-13-33t-33-13t-33 13t-13 32.5t13 33.5t33 14"></svg:path>`,
})
export class IlImageIcon {
  readonly viewBox = input("0 0 750 750")
  readonly width = input("1em")
  readonly height = input("1em")
}
