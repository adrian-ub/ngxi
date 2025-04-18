import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGuardianIcon],svg[arcticons-guardian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.33 24.82h13.62m-33.9-1.4c0-20.13 20.28-18.91 20.28-18.91c-5.95 0-9.26 8.89-9.26 18.91s3.31 20 9.26 20c0 .05-20.28 1.8-20.28-20M29.6 4.5c3 0 7.63 2.35 9 4.17v7.66Zm0 20.32v18.32s5.74-.81 9-4.34v-14"></svg:path>`,
})
export class ArcticonsGuardianIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
