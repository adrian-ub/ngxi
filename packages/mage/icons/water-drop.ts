import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageWaterDropIcon],svg[mage-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 13.277c0-4.525-4.59-8.481-6.81-10.136a2 2 0 0 0-2.38 0C8.59 4.796 4 8.752 4 13.277c0 5.98 5 7.973 8 7.973s8-1.993 8-7.973"></svg:path><svg:path d="M7 13.277c0 1.322.527 2.59 1.464 3.524A5 5 0 0 0 12 18.26"></svg:path></svg:g>`,
})
export class MageWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
