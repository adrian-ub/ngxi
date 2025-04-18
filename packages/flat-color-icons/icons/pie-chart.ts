import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPieChartIcon],svg[flat-color-icons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18c5.2 0 9.9-2.2 13.1-5.7L24 24z"></svg:path><svg:path fill="#448AFF" d="M42 24c0-9.9-8.1-18-18-18v18z"></svg:path><svg:path fill="#3F51B5" d="m24 24l13.1 12.3c3-3.2 4.9-7.5 4.9-12.3z"></svg:path>`,
})
export class FlatColorIconsPieChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
