import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownBoldIcon],svg[ph-arrow-fat-lines-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.09 131.41A12 12 0 0 0 224 124h-36v-4a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v4H32a12 12 0 0 0-8.49 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.58-13.08M128 215l-67-67h19a12 12 0 0 0 12-12v-4h72v4a12 12 0 0 0 12 12h19ZM68 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArrowFatLinesDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
