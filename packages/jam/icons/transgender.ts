import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTransgenderIcon],svg[jam-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14A5 5 0 1 0 7 4a5 5 0 0 0 0 10m6.013-8.586A7.002 7.002 0 0 1 7.998 15.93L8 16v1h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-1q0-.036.002-.07A7.002 7.002 0 0 1 7 2a6.98 6.98 0 0 1 4.745 1.853l1.85-1.85H12.01a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.417z"></svg:path>`,
})
export class JamTransgenderIcon {
  readonly viewBox = input("-3 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
