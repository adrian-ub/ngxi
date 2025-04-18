import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiscFillIcon],svg[ph-disc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.3 43.31a8 8 0 0 0-.65-.5c-.23-.16-.47-.31-.71-.45a103.85 103.85 0 1 0 1.36 1ZM128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m88-24c0 2.47-.11 4.92-.31 7.34L168 126.92a39.83 39.83 0 0 0-11-26.41l27.78-39.67A87.8 87.8 0 0 1 216 128"></svg:path>`,
})
export class PhDiscFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
