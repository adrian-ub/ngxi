import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoBarChartIcon],svg[noto-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M4 4h120v120H4z"></svg:path><svg:path fill="none" stroke="#B0BEC5" stroke-miterlimit="10" stroke-width="2" d="M124 24.35H5.57M124 43.67H5.47M124 62.99H5.36M124 82.31H5.26M124 101.64H5.15"></svg:path><svg:path fill="#9CCC65" d="M38.72 121.91H21.89V55.38c0-1.36 1.1-2.46 2.46-2.46h11.91c1.36 0 2.46 1.1 2.46 2.46z"></svg:path><svg:path fill="#F44336" d="M72.42 121.91H55.58V74.84c0-1.36 1.1-2.46 2.46-2.46h11.91c1.36 0 2.46 1.1 2.46 2.46v47.07z"></svg:path><svg:path fill="#0091EA" d="M103.64 121.91H91.73c-1.36 0-2.46-1.1-2.46-2.46V25.86c0-1.36 1.1-2.46 2.46-2.46h11.91c1.36 0 2.46 1.1 2.46 2.46v93.59c0 1.36-1.1 2.46-2.46 2.46"></svg:path><svg:path fill="#B0BEC5" d="M124 120H8V4H4v120h120z"></svg:path><svg:path fill="#B0BEC5" d="M122 6v116H6V6zm2-2H4v120h120z"></svg:path>`,
})
export class NotoBarChartIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
