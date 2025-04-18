import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageElectricityDangerIcon],svg[mage-electricity-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13.242 9.8l-3.725 3.725h4.966l-3.725 3.725"></svg:path><svg:path d="M10.367 4.462L2.752 17.655a1.885 1.885 0 0 0 1.634 2.827h15.228a1.885 1.885 0 0 0 1.633-2.827L13.633 4.462a1.885 1.885 0 0 0-3.266 0"></svg:path></svg:g>`,
})
export class MageElectricityDangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
