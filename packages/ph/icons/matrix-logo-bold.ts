import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoBoldIcon],svg[ph-matrix-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 216a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H52v152h12a12 12 0 0 1 12 12M216 28h-24a12 12 0 0 0 0 24h12v152h-12a12 12 0 0 0 0 24h24a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-28 132v-40a36 36 0 0 0-60-26.8a35.91 35.91 0 0 0-39.51-5.68A12 12 0 0 0 68 96v64a12 12 0 0 0 24 0v-40a12 12 0 0 1 24 0v40a12 12 0 0 0 24 0v-40a12 12 0 0 1 24 0v40a12 12 0 0 0 24 0"></svg:path>`,
})
export class PhMatrixLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
