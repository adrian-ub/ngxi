import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPinDistanceFillIcon],svg[ri-pin-distance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.39 10.39L7.5 14.277L3.61 10.39a5.5 5.5 0 1 1 7.78 0M7.5 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12.89 10.89l-3.89 3.888l-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiPinDistanceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
