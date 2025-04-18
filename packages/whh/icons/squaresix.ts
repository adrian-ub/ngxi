import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquaresixIcon],svg[whh-squaresix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-53-37.5-90.5t-90.5-37.5h-128q-34 0-64 17v-81q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v256q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-128 128h-128q-26 0-45-18.5t-19-45.5v-64q0-26 19-45t45-19h128q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhSquaresixIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
