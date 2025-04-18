import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForSingaporeIcon],svg[emojione-flag-for-singapore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30"></svg:path><svg:path fill="#ed4c5c" d="M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2"></svg:path><svg:g fill="#f9f9f9"><svg:path d="m21.2 17.5l-1.2-1h1.5L22 15l.5 1.5H24l-1.2 1l.4 1.5l-1.2-.9l-1.2.9zm8 0l-1.2-1h1.5L30 15l.5 1.5H32l-1.2 1l.4 1.5l-1.2-.9l-1.2.9zm-7 5l-1.2-1h1.5L23 20l.5 1.5H25l-1.2 1l.4 1.5l-1.2-.9l-1.2.9zm6 0l-1.2-1h1.5L29 20l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9zm-3-8l-1.2-1h1.5L26 12l.5 1.5H28l-1.2 1l.4 1.5l-1.2-.9l-1.2.9z"></svg:path><svg:path d="M24.4 28c-4.8 0-8.6-4.1-8.6-9.1s3.9-9.1 8.6-9.1c.4 0 .7 0 1 .1Q23.6 9 21.5 9C16.3 9 12 13.5 12 19s4.3 10 9.5 10c1.6 0 3.2-.4 4.5-1.2c-.5.1-1 .2-1.6.2"></svg:path></svg:g>`,
})
export class EmojioneFlagForSingaporeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
