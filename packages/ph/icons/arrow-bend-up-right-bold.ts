import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightBoldIcon],svg[ph-arrow-bend-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-67a84.09 84.09 0 0 0-84 84a12 12 0 0 1-24 0A108.12 108.12 0 0 1 128 92h67l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01"></svg:path>`,
})
export class PhArrowBendUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
