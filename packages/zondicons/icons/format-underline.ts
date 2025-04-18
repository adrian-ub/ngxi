import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsFormatUnderlineIcon],svg[zondicons-format-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9A6 6 0 1 1 4 9V1h3v8a3 3 0 0 0 6 0V1h3zM2 17h16v2H2z"></svg:path>`,
})
export class ZondiconsFormatUnderlineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
