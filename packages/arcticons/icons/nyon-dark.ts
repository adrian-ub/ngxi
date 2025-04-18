import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNyonDarkIcon],svg[arcticons-nyon-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.16 7.14v19.152l12.875 12.516l-.359-30.879L36.84 21.01v19.85L23.909 27.929M11.16 7.14l12.516 12.516"></svg:path>`,
})
export class ArcticonsNyonDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
