import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPinAddFillIcon],svg[ri-map-pin-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0M11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z"></svg:path>`,
})
export class RiMapPinAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
