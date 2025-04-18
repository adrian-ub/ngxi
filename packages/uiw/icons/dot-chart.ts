import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwDotChartIcon],svg[uiw-dot-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.02 13.997a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1.001H1a1 1 0 0 1-1-1v-2.002a1 1 0 0 1 1-1.001zM19 8.007a1 1 0 0 1 1 1.002v2.001a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1.001zM11.03 2a1 1 0 0 1 1 1v2.002a1 1 0 0 1-1 1.001H1.001a1 1 0 0 1-1-1V3A1 1 0 0 1 1 2z"></svg:path>`,
})
export class UiwDotChartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
