import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceThinIcon],svg[ph-chart-pie-slice-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 109.5v-72a4 4 0 0 0-5.33-3.77a100 100 0 0 0-65 112.5A4 4 0 0 0 35.6 149L98 113a4 4 0 0 0 2-3.5m-8-2.31l-55.33 31.92A92 92 0 0 1 92 43.34ZM128 28a4 4 0 0 0-4 4v94.12l-80.8 47.06a4 4 0 0 0-1.43 5.49A100 100 0 1 0 128 28m0 192a92.47 92.47 0 0 1-77.22-42L130 131.88a4 4 0 0 0 2-3.46V36.09A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhChartPieSliceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
