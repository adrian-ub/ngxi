import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlushedFaceIcon],svg[twemoji-flushed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"></svg:path><svg:circle cx="29" cy="23" r="5" fill="#FF7892"></svg:circle><svg:circle cx="7" cy="23" r="5" fill="#FF7892"></svg:circle><svg:circle cx="24.5" cy="16.5" r="5.5" fill="#F5F8FA"></svg:circle><svg:circle cx="11.5" cy="16.5" r="5.5" fill="#F5F8FA"></svg:circle><svg:circle cx="11.5" cy="16.5" r="2.5" fill="#292F33"></svg:circle><svg:circle cx="24.5" cy="16.5" r="2.5" fill="#292F33"></svg:circle><svg:path fill="#664500" d="M22 30h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2m8.001-19a1 1 0 0 1-.801-.4c-2.64-3.521-6.061-3.598-6.206-3.6a1 1 0 0 1-.991-1.005A.997.997 0 0 1 23 5c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6M5.999 11A1 1 0 0 1 5.2 9.4C8.462 5.05 12.816 5 13 5a1 1 0 0 1 .004 2c-.155.002-3.568.086-6.204 3.6a1 1 0 0 1-.801.4"></svg:path>`,
})
export class TwemojiFlushedFaceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
