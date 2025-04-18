import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBarChartIcon],svg[lineicons-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 55.2h-5.4V35.5c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2 0-5.7 2.6-5.7 5.7v19.7h-6V20.4c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2 0-5.7 2.6-5.7 5.7v34.8H6.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v48.9c0 2.3 1.9 4.3 4.3 4.3h54c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2m-41.3 0V20.4c0-.7.6-1.2 1.2-1.2h5.8c.7 0 1.2.6 1.2 1.2v34.8zm23.2 0V35.5c0-.7.6-1.2 1.2-1.2h5.8c.7 0 1.2.6 1.2 1.2v19.7z"></svg:path>`,
})
export class LineiconsBarChartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
