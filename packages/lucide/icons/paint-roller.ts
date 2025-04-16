import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePaintRollerIcon],svg[lucide-paint-roller-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="6" x="2" y="2" rx="2"></svg:rect><svg:path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></svg:path><svg:rect width="4" height="6" x="8" y="16" rx="1"></svg:rect></svg:g>`,
})
export class LucidePaintRollerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
