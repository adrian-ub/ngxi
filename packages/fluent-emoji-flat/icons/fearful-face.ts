import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFearfulFaceIcon],svg[fluent-emoji-flat-fearful-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M29.998 15.999c0 7.731-4.665 13.999-14 13.999C6.665 29.998 2 23.73 2 15.998Q2 14.98 2.108 14l13.89-6l13.892 6q.108.98.108 1.999"></svg:path><svg:path fill="#5092FF" d="M29.89 14c-.747-6.785-5.376-12-13.891-12S2.855 7.215 2.108 14z"></svg:path><svg:path fill="#fff" d="M10.5 18a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M8.952 7.2c.54-.475.875-1.127 1.065-1.83a.5.5 0 0 1 .966.26c-.225.831-.64 1.68-1.371 2.321C8.873 8.6 7.855 9 6.5 9a.5.5 0 1 1 0-1c1.145 0 1.92-.333 2.452-.8m14.096 0c-.54-.475-.875-1.127-1.065-1.83a.5.5 0 0 0-.966.26c.225.831.64 1.68 1.371 2.321C23.127 8.6 24.145 9 25.5 9a.5.5 0 0 0 0-1c-1.145 0-1.92-.333-2.452-.8M14 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="#BB1D80" d="M22.718 24.026c.31 1.06-.615 1.974-1.72 1.974h-9.997c-1.105 0-2.03-.914-1.719-1.974a7.003 7.003 0 0 1 13.436 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFearfulFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
