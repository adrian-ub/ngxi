import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquaregIcon],svg[whh-squareg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-193-480q0-13-9-22.5t-23-9.5h-127q-14 0-23.5 9.5t-9.5 22.5t9.5 22.5t23.5 9.5h95v64q0 27-18.5 45.5t-45.5 18.5h-128q-26 0-44.5-18.5t-18.5-45.5V384q0-26 18.5-45t44.5-19h128q27 0 45.5 19t18.5 45q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90 37.5t-37 90.5v256q0 53 37 90.5t90 37.5h128q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquaregIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
