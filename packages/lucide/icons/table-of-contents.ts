import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTableOfContentsIcon],svg[lucide-table-of-contents-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H3m13 6H3M16 6H3m18 6h.01M21 18h.01M21 6h.01"></svg:path>`,
})
export class LucideTableOfContentsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
