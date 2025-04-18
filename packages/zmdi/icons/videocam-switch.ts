import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVideocamSwitchIcon],svg[zmdi-videocam-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m341 139l86-86v278l-86-86v75q0 9-6 15t-15 6H21q-8 0-14.5-6T0 320V64q0-9 6.5-15T21 43h299q9 0 15 6t6 15zM235 267l74-75l-74-75v54H107v-54l-75 75l75 75v-54h128z"></svg:path>`,
})
export class ZmdiVideocamSwitchIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
