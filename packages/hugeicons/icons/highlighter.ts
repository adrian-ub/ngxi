import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHighlighterIcon],svg[hugeicons-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.755 21.244h-4c-.3 0-.57-.18-.69-.46s-.06-.6.15-.81l3.78-3.88c-.21-.58-.11-1.27.3-1.81c.72-.93.95-1.73 1.01-2.24c.1-.81.3-1.83 1.03-2.55l.47-.47c-.07-.19-.1-.39-.1-.59c0-.47.18-.91.51-1.24l4.24-4.23c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.24 4.23c-.06.06-.07.14-.07.18s0 .12.07.18l6.35 6.35c.1.1.26.1.36 0l4.23-4.24c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.23 4.24c-.49.5-1.21.63-1.83.41l-.48.48c-.71.72-1.73.93-2.54 1.03c-.51.06-1.31.28-2.24 1.01c-.54.42-1.23.52-1.82.3l-1.88 1.79a.76.76 0 0 1-.52.21zm-2.22-1.5h1.92l1.52-1.44l-1.03-1.03zm5.04-1.96c.12.12.33.08.47-.02c1.19-.93 2.28-1.23 2.98-1.31c.52-.06 1.26-.19 1.65-.59l.36-.36l-5.29-5.29l-.36.36c-.4.39-.53 1.09-.6 1.66c-.08.7-.38 1.79-1.31 2.98c-.12.15-.13.36-.02.47l2.11 2.11z" color="currentColor"></svg:path>`,
})
export class HugeiconsHighlighterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
