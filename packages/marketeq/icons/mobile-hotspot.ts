import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMobileHotspotIcon],svg[marketeq-mobile-hotspot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M18.75 43.75h12.5M25 27.083V43.75z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M11.75 38.25a18.75 18.75 0 1 1 26.5 0"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M32.375 32.375a10.416 10.416 0 1 0-14.75 0"></svg:path></svg:g>`,
})
export class MarketeqMobileHotspotIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
