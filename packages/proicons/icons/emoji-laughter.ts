import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsEmojiLaughterIcon],svg[proicons-emoji-laughter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9.25"></svg:circle><svg:path d="M16.5 12.75c.276 0 .503.224.475.5a4.999 4.999 0 0 1-9.594 1.413a5 5 0 0 1-.356-1.414c-.028-.275.199-.499.475-.499zM7.264 9.082a1.797 1.797 0 0 1 3.472 0m2.528 0a1.796 1.796 0 0 1 3.472 0"></svg:path></svg:g>`,
})
export class ProiconsEmojiLaughterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
