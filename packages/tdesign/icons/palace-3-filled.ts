import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace3FilledIcon],svg[tdesign-palace-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.002 3.083l.002-1.081l-2-.004l-.002 1.085A6 6 0 0 0 6 9H2v13h5.5v-2.5c0-1.942.97-3.402 1.77-4.283a8.6 8.6 0 0 1 1.508-1.308l.193-.124L12 13.168l1.029.617l.193.124a8.6 8.6 0 0 1 1.508 1.308c.8.88 1.77 2.34 1.77 4.283V22H22V9h-4a6 6 0 0 0-4.998-5.917m0 3.915v2.004h-2.004V6.998z"></svg:path><svg:path fill="currentColor" d="M9.5 19.5c0-2.5 2.5-4 2.5-4s2.5 1.5 2.5 4V22h-5z"></svg:path>`,
})
export class TdesignPalace3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
