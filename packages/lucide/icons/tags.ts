import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTagsIcon],svg[lucide-tags-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></svg:path><svg:path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"></svg:path><svg:circle cx="6.5" cy="9.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LucideTagsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
