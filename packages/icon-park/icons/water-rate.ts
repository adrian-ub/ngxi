import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterRateIcon],svg[icon-park-water-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C32.8366 44 40 37.4876 40 29.4545C40 21.5758 34.6667 13.0909 24 4C13.3333 13.0909 8 21.5758 8 29.4545C8 37.4878 15.1634 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.8572 19L24 24.3684L29.1429 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 26.158H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 31.5264H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 26.158V36.0001"></svg:path></svg:g>`,
})
export class IconParkWaterRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
