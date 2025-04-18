import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSunHorizonFillIcon],svg[ph-sun-horizon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 160a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h40.45a74 74 0 0 1-.45-8a72 72 0 0 1 144 0a74 74 0 0 1-.45 8H240a8 8 0 0 1 8 8m-40 32H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16M80.84 59.58a8 8 0 0 0 14.32-7.16l-8-16a8 8 0 0 0-14.32 7.16Zm-60.42 43.58l16 8a8 8 0 1 0 7.16-14.31l-16-8a8 8 0 1 0-7.16 14.31M216 112a8 8 0 0 0 3.57-.84l16-8a8 8 0 1 0-7.16-14.31l-16 8A8 8 0 0 0 216 112m-51.58-48.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.32-7.16l-8 16a8 8 0 0 0 3.58 10.74"></svg:path>`,
})
export class PhSunHorizonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
