import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBarChartFill16Icon],svg[garden-bar-chart-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.037 16.001L12.963 16c-.532-.001-.963-.449-.963-1.003V1.002c0-.554.431-1.003.963-1.002l2.078.001c.53 0 .959.448.959 1v13.998c0 .553-.431 1.002-.963 1.002M3.043 16H.957C.428 16 0 15.554 0 15.003V7.997C0 7.446.428 7 .957 7h2.086c.529 0 .957.446.957.997v7.006c0 .551-.428.997-.957.997m5.999 0H6.958A.96.96 0 0 1 6 15.042V4.958C6 4.429 6.43 4 6.958 4h2.084c.529 0 .958.43.958.958v10.084c0 .529-.43.958-.958.958"></svg:path>`,
})
export class GardenBarChartFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
