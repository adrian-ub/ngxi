import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareeIcon],svg[whh-squaree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-496-512h208q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-208q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h272q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-272q-7 0-11.5-4.5t-4.5-11.5V528q0-7 4.5-11.5t11.5-4.5"></svg:path>`,
})
export class WhhSquareeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
