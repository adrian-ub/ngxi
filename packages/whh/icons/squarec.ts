import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquarecIcon],svg[whh-squarec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-704h128q26 0 45 19t19 45q0 13 9 22.5t22.5 9.5t23-9.5t9.5-22.5q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-91 37.5t-38 90.5v256q0 53 38 90.5t91 37.5h128q53 0 90.5-37.5t37.5-90.5q0-13-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5q0 27-19 45.5t-45 18.5h-128q-27 0-45.5-18.5t-18.5-45.5V384q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhSquarecIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
