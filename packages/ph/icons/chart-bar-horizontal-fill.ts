import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalFillIcon],svg[ph-chart-bar-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112v32a8 8 0 0 1-8 8H56v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v16h168a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartBarHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
