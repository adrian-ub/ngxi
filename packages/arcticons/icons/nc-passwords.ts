import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNcPasswordsIcon],svg[arcticons-nc-passwords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.5 21.523V15a10.5 10.5 0 0 0-21 0v6.523a13.5 13.5 0 1 0 21 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.5a13.4 13.4 0 0 1 6 1.42V15a6 6 0 0 0-12 0v2.92a13.4 13.4 0 0 1 6-1.42M27.5 28a3.5 3.5 0 1 0-5 3.15V36h3v-4.85a3.49 3.49 0 0 0 2-3.15"></svg:path>`,
})
export class ArcticonsNcPasswordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
