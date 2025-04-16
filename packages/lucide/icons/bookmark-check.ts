import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBookmarkCheckIcon],svg[lucide-bookmark-check-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"></svg:path><svg:path d="m9 10l2 2l4-4"></svg:path></svg:g>`,
})
export class LucideBookmarkCheckIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
