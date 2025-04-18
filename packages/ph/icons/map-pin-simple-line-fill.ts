import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineFillIcon],svg[ph-map-pin-simple-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h80v-72.58a56 56 0 1 1 16 0V208h80a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMapPinSimpleLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
