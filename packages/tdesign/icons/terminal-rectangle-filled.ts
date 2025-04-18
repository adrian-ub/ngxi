import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangleFilledIcon],svg[tdesign-terminal-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21V3H1v18zm-12.93-9l-3.739 3.744l-1.415-1.413L7.244 12L4.916 9.669l1.415-1.413zM19 17h-7v-2h7z"></svg:path>`,
})
export class TdesignTerminalRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
