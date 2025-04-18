import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesLightIcon],svg[ph-eyeglasses-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42a6 6 0 0 0 0 12a18 18 0 0 1 18 18v62.65A42 42 0 0 0 147.21 154h-38.42A42 42 0 0 0 38 134.65V72a18 18 0 0 1 18-18a6 6 0 0 0 0-12a30 30 0 0 0-30 30v92a42 42 0 0 0 84 2h36.1a42 42 0 0 0 83.9-2V72a30 30 0 0 0-30-30M68 194a30 30 0 1 1 30-30a30 30 0 0 1-30 30m120 0a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhEyeglassesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
