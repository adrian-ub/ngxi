import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalLightIcon],svg[ph-chart-bar-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 98h-42V56a6 6 0 0 0-6-6H54V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-10h90a6 6 0 0 0 6-6v-42h74a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-54-36v36H54V62Zm-32 132H54v-36h84Zm80-48H54v-36h164Z"></svg:path>`,
})
export class PhChartBarHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
