import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareoIcon],svg[whh-squareo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v256q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-128 320h-128q-26 0-45-18.5t-19-45.5V384q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSquareoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
