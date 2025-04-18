import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAndftpIcon],svg[arcticons-andftp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 38.02V22.18h15.84v15.84zm23.16 0V22.18h15.83v15.84z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.93 34.74v-9.3h9.3v9.3zm-23.16 0v-9.3h9.3v9.3zm12.57-2.82h7.31m.01-2.44h-2.44V12.42h4.87V9.98H17.9v2.44h4.87v17.06h-2.44M6.94 11.2h10.97m12.18 0h10.97"></svg:path>`,
})
export class ArcticonsAndftpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
