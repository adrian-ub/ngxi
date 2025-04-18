import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBarChartCircleIcon],svg[ci-bar-chart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Zm13 4h2V9h-2v7Zm-8 0h2v-5H7v5Zm4 0h2V6h-2v10Z" clip-rule="evenodd"></svg:path>`,
})
export class CiBarChartCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
