import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightThinIcon],svg[ph-arrow-bend-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 108H128a92.1 92.1 0 0 0-92 92a4 4 0 0 1-8 0a100.11 100.11 0 0 1 100-100h86.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowBendUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
