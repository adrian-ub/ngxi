import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPyramidChartIcon],svg[vaadin-pyramid-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.29 5L8 1L5.71 5zm-8 6L0 15h16l-2.29-4zm10.85-1l-2.28-4H5.14l-2.28 4z"></svg:path>`,
})
export class VaadinPyramidChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
