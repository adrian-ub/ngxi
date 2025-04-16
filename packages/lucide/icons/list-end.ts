import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListEndIcon],svg[lucide-list-end-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 12H3m13-6H3m7 12H3M21 6v10a2 2 0 0 1-2 2h-5"></svg:path><svg:path d="m16 16l-2 2l2 2"></svg:path></svg:g>`,
})
export class LucideListEndIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
