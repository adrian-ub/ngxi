import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsComboChartIcon],svg[flat-color-icons-combo-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M37 18h6v24h-6zm-8 8h6v16h-6zm-8-4h6v20h-6zm-8 10h6v10h-6zm-8-4h6v14H5z"></svg:path><svg:g fill="#3F51B5"><svg:circle cx="8" cy="16" r="3"></svg:circle><svg:circle cx="16" cy="18" r="3"></svg:circle><svg:circle cx="24" cy="11" r="3"></svg:circle><svg:circle cx="32" cy="13" r="3"></svg:circle><svg:circle cx="40" cy="9" r="3"></svg:circle><svg:path d="m39.1 7.2l-7.3 3.7l-8.3-2.1l-8 7l-7-1.7l-1 3.8l9 2.3l8-7l7.7 1.9l8.7-4.3z"></svg:path></svg:g>`,
})
export class FlatColorIconsComboChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
