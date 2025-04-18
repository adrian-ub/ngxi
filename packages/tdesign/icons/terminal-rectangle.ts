import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangleIcon],svg[tdesign-terminal-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v18H1V3zm-2 2H3v14h18zm-2 12h-7v-2h7zm-8.93-5l-3.739 3.744l-1.415-1.413L7.244 12L4.916 9.67L6.33 8.255z"></svg:path>`,
})
export class TdesignTerminalRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
