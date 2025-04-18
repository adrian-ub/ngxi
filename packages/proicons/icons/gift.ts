import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsGiftIcon],svg[proicons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12.5H12V21H7a2.5 2.5 0 0 1-2.5-2.5zm-1.75-3A1.5 1.5 0 0 1 4.25 8H12v4.5H4.25a1.5 1.5 0 0 1-1.5-1.5zm9.25 3h7.5v6A2.5 2.5 0 0 1 17 21h-5zM12 8h7.75a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5H12zM7 5.5A2.5 2.5 0 0 1 9.5 3v0A2.5 2.5 0 0 1 12 5.5V8H9.5A2.5 2.5 0 0 1 7 5.5m10 0A2.5 2.5 0 0 0 14.5 3v0A2.5 2.5 0 0 0 12 5.5V8h2.5A2.5 2.5 0 0 0 17 5.5"></svg:path>`,
})
export class ProiconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
