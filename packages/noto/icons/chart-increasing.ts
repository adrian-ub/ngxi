import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoChartIncreasingIcon],svg[noto-chart-increasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M4 4h120v120H4z"></svg:path><svg:path fill="none" stroke="#B0BEC5" stroke-miterlimit="10" stroke-width="1.993" d="M24.7 4.2v119.6M44.35 4.2v119.6M64 4.2v119.6M83.65 4.2v119.6M103.3 4.2v119.6"></svg:path><svg:path fill="none" stroke="#B0BEC5" stroke-miterlimit="10" stroke-width="2" d="M123.8 24.66H4.15m119.66 19.67H4.16M123.83 64H4.17m119.67 19.67H4.19m119.66 19.67H4.2"></svg:path><svg:path fill="#E53935" d="m5.1 122.98l-.08-6.16L31.94 68.3l23.7 21.91l63.78-85.1h3.49l.14 5.16l-66.6 88.86l-23.02-21.28l-24.98 45.16z"></svg:path><svg:path fill="#B0BEC5" d="M122.01 5.99V122H5.99V5.99zM124 4H4v120h120z"></svg:path>`,
})
export class NotoChartIncreasingIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
