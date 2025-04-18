import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightBoldIcon],svg[ph-arrow-bend-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 160.49l-48 48a12 12 0 0 1-17-17L195 164h-67A108.12 108.12 0 0 1 20 56a12 12 0 0 1 24 0a84.09 84.09 0 0 0 84 84h67l-27.52-27.51a12 12 0 0 1 17-17l48 48a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowBendDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
