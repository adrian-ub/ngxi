import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAreaChartIcon],svg[flat-color-icons-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M42 37H6V25l10-15l14 7L42 6z"></svg:path><svg:path fill="#00BCD4" d="M42 42H6V32l10-8l14 2l12-9z"></svg:path>`,
})
export class FlatColorIconsAreaChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
