import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWebcamIcon],svg[whh-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 768q-104 0-192.5-51.5t-140-140T0 384t51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384t-51.5 192.5t-140 140T384 768m0-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 256q-53 0-90.5-28T256 288t37.5-68t90.5-28t90.5 28t37.5 68t-37.5 68t-90.5 28M240 821q68 11 144 11t144-11q50 38 81 92t31 111H128q0-57 31-111.5t81-91.5"></svg:path>`,
})
export class WhhWebcamIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
