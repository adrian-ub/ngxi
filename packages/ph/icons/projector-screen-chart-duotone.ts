import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenChartDuotoneIcon],svg[ph-projector-screen-chart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 72v112H48V72Z" opacity=".2"></svg:path><svg:path d="M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m56-72v96h8a8 8 0 0 1 0 16h-88v17.38a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16m-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8M40 64h176V48H40Zm160 16H56v96h144Z"></svg:path></svg:g>`,
})
export class PhProjectorScreenChartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
