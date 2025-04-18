import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartBarLightIcon],svg[ph-chart-bar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 202h-10V40a6 6 0 0 0-6-6h-56a6 6 0 0 0-6 6v42H96a6 6 0 0 0-6 6v42H48a6 6 0 0 0-6 6v66H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M158 46h44v156h-44Zm-56 48h44v108h-44Zm-48 48h36v60H54Z"></svg:path>`,
})
export class PhChartBarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
