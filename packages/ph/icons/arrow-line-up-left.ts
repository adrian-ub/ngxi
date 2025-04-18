import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftIcon],svg[ph-arrow-line-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M72 152a8 8 0 0 0 8-8V67.31l98.34 98.35a8 8 0 0 0 11.32-11.32L91.31 56H168a8 8 0 0 0 0-16H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhArrowLineUpLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
