import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHeadsetMicIcon],svg[zmdi-headset-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 5q80 0 136 56.5T384 197v214q0 26-18.5 45T320 475H192v-43h149v-21h-85V240h85v-43q0-62-43.5-105.5T192 48T86.5 91.5T43 197v43h85v171H64q-27 0-45.5-19T0 347V197q0-79 56-135.5T192 5"></svg:path>`,
})
export class ZmdiHeadsetMicIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
