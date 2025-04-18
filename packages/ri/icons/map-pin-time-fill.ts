import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPinTimeFillIcon],svg[ri-map-pin-time-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11V6h-2v7h6v-2zm5.364 6.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0"></svg:path>`,
})
export class RiMapPinTimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
