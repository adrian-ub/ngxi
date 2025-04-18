import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowShrinkIcon],svg[hugeicons-arrow-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.23 17.995c-.01-.75-.526-3.234 0-3.76c.527-.527 3.01-.01 3.76 0M21 20.999l-6.385-6.383M9.77 17.995c.01-.75.526-3.234-.001-3.76c-.527-.527-3.01-.01-3.759 0M3 20.999l6.385-6.383M6.008 9.761c.75.01 3.233.522 3.759-.005s.006-3.01-.006-3.76m-.384 3.371L3.002 3.002m14.99 6.759c-.75.01-3.234.522-3.76-.005s-.005-3.01.006-3.76m.384 3.371l6.375-6.365" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowShrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
