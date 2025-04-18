import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPyramidChartIcon],svg[lets-icons-pyramid-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.866 3.268L3.109 20.783a.15.15 0 0 0 .134.217h17.514a.15.15 0 0 0 .134-.217L12.135 3.268a.15.15 0 0 0-.268 0ZM19 17H5m12-4H7m8-4H9"></svg:path>`,
})
export class LetsIconsPyramidChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
