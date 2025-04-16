import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListTreeIcon],svg[lucide-list-tree-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12h-8m8-6H8m13 12h-8M3 6v4c0 1.1.9 2 2 2h3"></svg:path><svg:path d="M3 10v6c0 1.1.9 2 2 2h3"></svg:path></svg:g>`,
})
export class LucideListTreeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
