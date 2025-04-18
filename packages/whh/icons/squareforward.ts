import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareforwardIcon],svg[whh-squareforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-391-531l-218-231q-13-14-31 6v488q18 20 31 7l218-232q7-7 7-18.5t-7-19.5m320 0l-218-231q-12-14-31 6v488q19 20 31 7l218-232q7-7 7-18.5t-7-19.5"></svg:path>`,
})
export class WhhSquareforwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
