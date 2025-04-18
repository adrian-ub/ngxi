import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightIcon],svg[ph-arrow-line-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.66 122.34a8 8 0 0 1 0 11.32l-72 72a8 8 0 0 1-11.32-11.32L164.69 136H32a8 8 0 0 1 0-16h132.69l-58.35-58.34a8 8 0 0 1 11.32-11.32ZM216 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowLineRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
