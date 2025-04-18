import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownThinIcon],svg[ph-arrow-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.17 114.83a4 4 0 0 1 5.66-5.66L124 174.34V32a4 4 0 0 1 8 0v142.34l65.17-65.17a4 4 0 1 1 5.66 5.66l-72 72a4 4 0 0 1-5.66 0ZM216 212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArrowLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
