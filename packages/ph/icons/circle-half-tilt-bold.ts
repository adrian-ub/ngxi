import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltBoldIcon],svg[ph-circle-half-tilt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.37 51.6A108.08 108.08 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.4M176 197a83.4 83.4 0 0 1-16 8.75V113l16-16ZM68.6 68.58a84.08 84.08 0 0 1 109.7-7.88L60.72 178.33A84.08 84.08 0 0 1 68.6 68.58M96 177v28.69a83.6 83.6 0 0 1-18.3-10.39Zm24 34.62V153l16-16v74.64a84.7 84.7 0 0 1-16-.02m80-40.27v-86.7a84.24 84.24 0 0 1 0 86.7"></svg:path>`,
})
export class PhCircleHalfTiltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
