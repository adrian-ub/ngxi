import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCircuitBoardIcon],svg[lucide-circuit-board-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M11 9h4a2 2 0 0 0 2-2V3"></svg:path><svg:circle cx="9" cy="9" r="2"></svg:circle><svg:path d="M7 21v-4a2 2 0 0 1 2-2h4"></svg:path><svg:circle cx="15" cy="15" r="2"></svg:circle></svg:g>`,
})
export class LucideCircuitBoardIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
