import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGrimacingFaceIcon],svg[fluent-emoji-flat-grimacing-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="#BB1D80" d="M8 22c0-.891.389-1.692 1.005-2.241l13.979-.01A3 3 0 0 1 24 22a3 3 0 0 1-1.012 2.246l-13.972.004A3 3 0 0 1 8 22"></svg:path><svg:path fill="#fff" d="M23 20.5v-.736A3 3 0 0 0 21 19H11c-.768 0-1.47.289-2 .764v.736a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1M21 25c.768 0 1.47-.289 2-.764V23.5a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v.736c.53.475 1.232.764 2 .764z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatGrimacingFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
