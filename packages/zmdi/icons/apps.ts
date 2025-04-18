import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAppsIcon],svg[zmdi-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 107V21h85v86zm128 256v-86h85v86zM0 363v-86h85v86zm0-128v-86h85v86zm128 0v-86h85v86zM256 21h85v86h-85zm-128 86V21h85v86zm128 128v-86h85v86zm0 128v-86h85v86z"></svg:path>`,
})
export class ZmdiAppsIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
