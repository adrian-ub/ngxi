import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePopcornIcon],svg[lucide-popcorn-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 8a2 2 0 0 0 0-4a2 2 0 0 0-4 0a2 2 0 0 0-4 0a2 2 0 0 0-4 0a2 2 0 0 0 0 4m4 14L9 8m5 14l1-14"></svg:path><svg:path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"></svg:path></svg:g>`,
})
export class LucidePopcornIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
