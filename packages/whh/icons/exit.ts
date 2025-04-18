import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhExitIcon],svg[whh-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.428 555l-163 200q-11 12-29.5 12.5t-32-7.5t-13.5-19V640h-128q-26 0-45-18.5t-19-45.5V448q0-27 19-45.5t45-18.5h128V284q0-12 13.5-20t32-7.5t29.5 12.5l163 199q18 18 18 43.5t-18 43.5m-365.5-299q-26.5 0-45.5-19t-19-45.5t-18.5-45t-45.5-18.5h-320q-26 0-45 18.5t-19 45.5v640q0 26 19 45t45 19h320q27 0 45.5-19t18.5-45.5t19-45t45.5-18.5t45 18.5t18.5 45.5v64q0 53-37.5 90.5t-90.5 37.5h-448q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h448q53 0 90.5 37.5t37.5 90.5v64q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhExitIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
