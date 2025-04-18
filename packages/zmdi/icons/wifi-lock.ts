import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiLockIcon],svg[zmdi-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M482 277q8 0 14.5 7t6.5 15v85q0 8-6.5 14.5T482 405H375q-8 0-14.5-6.5T354 384v-85q0-8 6.5-15t14.5-7v-32q0-22 15.5-37.5t38-15.5t38 15.5T482 245zm-21 0v-32q0-12-9.5-22T429 213t-22.5 10t-9.5 22v32zm-139-32v56l-75 94L0 85Q114 0 247.5 0T495 85l-45 56q-6-2-21-2q-45 0-76 31t-31 75"></svg:path>`,
})
export class ZmdiWifiLockIcon {
  readonly viewBox = input("0 0 504 408")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
