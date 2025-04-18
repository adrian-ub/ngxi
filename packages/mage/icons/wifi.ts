import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageWifiIcon],svg[mage-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.308 17.886a1.308 1.308 0 1 1-2.616 0a1.308 1.308 0 0 1 2.616 0m-5.011-3.702a5.234 5.234 0 0 1 7.406 0M5.524 11.41a9.16 9.16 0 0 1 12.952 0"></svg:path><svg:path d="M2.75 8.636a13.083 13.083 0 0 1 18.5 0"></svg:path></svg:g>`,
})
export class MageWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
