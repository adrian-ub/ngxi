import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShareAndroidIcon],svg[ci-share-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13.5l6 3m0-9l-6 3M18 21a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m12-6a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CiShareAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
