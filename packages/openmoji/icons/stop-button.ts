import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStopButtonIcon],svg[openmoji-stop-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="36.441" height="36.441" x="17.885" y="17.784" fill="#fff" rx="5.039" ry="5.039"></svg:rect><svg:path d="M49.261 18A4.744 4.744 0 0 1 54 22.739V49.26A4.744 4.744 0 0 1 49.261 54H22.74A4.744 4.744 0 0 1 18 49.261V22.74A4.744 4.744 0 0 1 22.739 18zm0-2H22.74A6.74 6.74 0 0 0 16 22.739V49.26A6.74 6.74 0 0 0 22.739 56H49.26A6.74 6.74 0 0 0 56 49.261V22.74A6.74 6.74 0 0 0 49.261 16"></svg:path>`,
})
export class OpenmojiStopButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
