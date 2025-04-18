import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAmpprojectIcon],svg[fontisto-ampproject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.96.66L13.62 9.9h2.16c.6 0 .84.48.48 1.08L8.58 23.52a12.4 12.4 0 0 0 3.418.48H12c6.628-.005 11.998-5.379 11.998-12.008c0-5.209-3.317-9.644-7.955-11.306L15.959.66zm-5.58 13.38H8.22c-.6 0-.84-.48-.48-1.08L15.42.48A12.4 12.4 0 0 0 12.002 0H12C5.372.005.002 5.379.002 12.008c0 5.209 3.317 9.644 7.955 11.306l.084.026z"></svg:path>`,
})
export class FontistoAmpprojectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
