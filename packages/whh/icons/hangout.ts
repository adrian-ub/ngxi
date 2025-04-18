import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHangoutIcon],svg[whh-hangout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 768h-262l-154 256l-154-256h-198q-26 0-45-18.5t-19-45.5V192q0-26 19-45t45-19h768q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5m-64-494q0-18-32-18l-160 160V288q0-13-9.5-22.5t-22.5-9.5h-384q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h384q13 0 22.5-9.5t9.5-22.5V480l160 160q32 0 32-17zm-832-82v448q-27 0-45.5-18.5T.428 576V128q0-53 37.5-90.5t90.5-37.5h704q26 0 45 19t19 45h-704q-53 0-90.5 37.5t-37.5 90.5"></svg:path>`,
})
export class WhhHangoutIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
