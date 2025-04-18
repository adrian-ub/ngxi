import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightThinIcon],svg[ph-arrow-bend-double-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L218.34 104l-45.17-45.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66m-48-5.66l-48-48a4 4 0 1 0-5.66 5.66L166.34 100H128A100.11 100.11 0 0 0 28 200a4 4 0 0 0 8 0a92.1 92.1 0 0 1 92-92h38.34l-41.17 41.17a4 4 0 0 0 5.66 5.66l48-48a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhArrowBendDoubleUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
