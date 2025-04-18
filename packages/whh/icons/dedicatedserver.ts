import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDedicatedserverIcon],svg[whh-dedicatedserver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.428 832v64q0 53-37.5 90.5t-90.5 37.5h-64v-64h-640v64h-64q-53 0-90.5-37.5T.428 896v-64h64V192h-64v-64q0-53 37.5-90.5t90.5-37.5h64v64h640V0h64q53 0 90.5 37.5t37.5 90.5v64h-64v640zm-832-544q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-96 352q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m224-352q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm192 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-32 352h-448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhDedicatedserverIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
