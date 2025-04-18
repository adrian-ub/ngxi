import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterRateTwoIcon],svg[icon-park-water-rate-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C32.8366 44 40 36.8363 40 28C40 15 24 4 24 4C24 4 8 15 8 28C8 36.8366 15.1634 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 20L20 28H28L24 36"></svg:path></svg:g>`,
})
export class IconParkWaterRateTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
