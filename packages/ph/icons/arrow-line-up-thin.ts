import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpThinIcon],svg[ph-arrow-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 141.17a4 4 0 0 1-5.66 5.66L132 81.66V224a4 4 0 0 1-8 0V81.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0ZM216 36H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArrowLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
