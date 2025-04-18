import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFuseAlertIcon],svg[mdi-fuse-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7v10h7V7zm3.16 9v-3.13H7.41L9.91 8v3.14h1.68zM14 2v4H5V2c0-.55.45-1 1-1h7c.55 0 1 .45 1 1m0 16v4c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4zm5-5h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiFuseAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
