import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneAndroidIcon],svg[zmdi-smartphone-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 5q26 0 45 19t19 45v342q0 26-19 45t-45 19H64q-27 0-45.5-19T0 411V69q0-26 18.5-45T64 5zm-43 427v-21h-85v21zm69-64V69H37v299z"></svg:path>`,
})
export class ZmdiSmartphoneAndroidIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}
