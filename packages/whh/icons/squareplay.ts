import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareplayIcon],svg[whh-squareplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-136-531l-409-232q-12-13-31 7v488q18 20 31 7l409-232q8-8 8-19t-8-19"></svg:path>`,
})
export class WhhSquareplayIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
