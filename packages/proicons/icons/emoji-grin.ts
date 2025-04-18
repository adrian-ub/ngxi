import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsEmojiGrinIcon],svg[proicons-emoji-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:circle cx="9" cy="9" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9" r="1.25" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 12.75c.276 0 .503.224.475.5a4.999 4.999 0 0 1-9.594 1.413a5 5 0 0 1-.356-1.414c-.028-.275.199-.499.475-.499z"></svg:path></svg:g>`,
})
export class ProiconsEmojiGrinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
