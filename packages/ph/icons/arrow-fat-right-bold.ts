import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightBoldIcon],svg[ph-arrow-fat-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 119.51l-96-96A12 12 0 0 0 124 32v36H48a20 20 0 0 0-20 20v80a20 20 0 0 0 20 20h76v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12H52V92h84a12 12 0 0 0 12-12V61l67 67Z"></svg:path>`,
})
export class PhArrowFatRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
