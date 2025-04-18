import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBarChartIcon],svg[vaadin-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h15v1H0zm0-4h3v3H0zm4-2h3v5H4zm4-4h3v9H8zm4-5h3v14h-3z"></svg:path>`,
})
export class VaadinBarChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
