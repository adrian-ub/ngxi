import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartLineVariantIcon],svg[mdi-chart-line-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17z"></svg:path>`,
})
export class MdiChartLineVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
