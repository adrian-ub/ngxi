import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaChartIcon],svg[gala-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:rect width="224" height="224" x="16" y="16" ry="32"></svg:rect><svg:path d="M 160.00003,192.00003 V 111.99998"></svg:path><svg:path d="M 192.00002,192.00003 V 63.999974"></svg:path><svg:path d="m 63.999979,192.00003 v -32"></svg:path><svg:path d="m 95.99997,128 v 64.00003"></svg:path><svg:path d="m 128,144 v 48.00003"></svg:path></svg:g>`,
})
export class GalaChartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
