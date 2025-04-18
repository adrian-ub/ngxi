import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareoneIcon],svg[whh-squareone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-288-320h-32V384q0-65-42.5-96.5t-117.5-31.5q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h1q43 0 69 18.5t26 45.5v320h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhSquareoneIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
