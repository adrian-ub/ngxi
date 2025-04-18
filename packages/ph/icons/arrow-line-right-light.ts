import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightLightIcon],svg[ph-arrow-line-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 123.76a6 6 0 0 1 0 8.48l-72 72a6 6 0 0 1-8.48-8.48L169.51 134H32a6 6 0 0 1 0-12h137.51l-61.75-61.76a6 6 0 0 1 8.48-8.48ZM216 34a6 6 0 0 0-6 6v176a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowLineRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
