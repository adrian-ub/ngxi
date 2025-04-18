import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquarenIcon],svg[whh-squaren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v349l-260-365q-12-16-28-16q-11 0-21.5 9t-10.5 24v447q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V387l260 365q12 16 28 16t24-9.5t8-22.5z"></svg:path>`,
})
export class WhhSquarenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
