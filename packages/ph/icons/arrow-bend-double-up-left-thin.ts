import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftThinIcon],svg[ph-arrow-bend-double-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.83 149.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L37.66 104ZM128 100H89.66l41.17-41.17a4 4 0 0 0-5.66-5.66l-48 48a4 4 0 0 0 0 5.66l48 48a4 4 0 0 0 5.66-5.66L89.66 108H128a92.1 92.1 0 0 1 92 92a4 4 0 0 0 8 0a100.11 100.11 0 0 0-100-100"></svg:path>`,
})
export class PhArrowBendDoubleUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
