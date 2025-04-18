import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPresentationChartDuotoneIcon],svg[ph-presentation-chart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 136H40V56h176zm-112-56v24a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0m32-16v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0m32-16v56a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhPresentationChartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
