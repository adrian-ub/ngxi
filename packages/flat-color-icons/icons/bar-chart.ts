import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsBarChartIcon],svg[flat-color-icons-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M19 22h10v20H19zM6 12h10v30H6zm26-6h10v36H32z"></svg:path>`,
})
export class FlatColorIconsBarChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
