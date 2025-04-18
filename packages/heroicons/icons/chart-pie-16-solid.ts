import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChartPie16SolidIcon],svg[heroicons-chart-pie-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.975 6.5c.028.276-.199.5-.475.5h-4a.5.5 0 0 1-.5-.5v-4c0-.276.225-.503.5-.475A5 5 0 0 1 13.974 6.5"></svg:path><svg:path fill="currentColor" d="M6.5 4.025c.276-.028.5.199.5.475v4a.5.5 0 0 0 .5.5h4c.276 0 .503.225.475.5a5 5 0 1 1-5.474-5.475"></svg:path>`,
})
export class HeroiconsChartPie16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
