import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWirelessIcon],svg[openmoji-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" d="M12 12h48v48H12z"></svg:path><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="48" height="48" x="12" y="12" fill="none" rx=".931" ry=".931"></svg:rect><svg:circle cx="36" cy="45" r="2"></svg:circle><svg:path fill="none" d="M29.582 40.1S36 33 42.026 40.1M26 36s10-11 20 0"></svg:path><svg:path fill="none" d="M23 32s13-14 26 0"></svg:path></svg:g>`,
})
export class OpenmojiWirelessIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
