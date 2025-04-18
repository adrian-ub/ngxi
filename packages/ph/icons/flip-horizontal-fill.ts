import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalFillIcon],svg[ph-flip-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40v160a16 16 0 0 1-16 16H40a16 16 0 0 1-14.78-22.15l64-159.93l.06-.14A16 16 0 0 1 120 40m109.33 168.84A16 16 0 0 1 216 216h-64a16 16 0 0 1-16-16V40a16 16 0 0 1 30.74-6.23l.06.14l64 159.93a16 16 0 0 1-1.47 15M216 200l-.06-.15L152 40v160Z"></svg:path>`,
})
export class PhFlipHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
