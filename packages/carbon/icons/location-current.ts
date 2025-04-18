import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLocationCurrentIcon],svg[carbon-location-current-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.984a1 1 0 0 0 .629.944l9.601 3.841l3.841 9.602A1 1 0 0 0 19 28h.016a1 1 0 0 0 .924-.658l8-22a1 1 0 0 0-1.282-1.283l-22 8a1 1 0 0 0-.658.925"></svg:path>`,
})
export class CarbonLocationCurrentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
