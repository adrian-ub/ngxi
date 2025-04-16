import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquareUserRoundIcon],svg[lucide-square-user-round-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 21a6 6 0 0 0-12 0"></svg:path><svg:circle cx="12" cy="11" r="4"></svg:circle><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect></svg:g>`,
})
export class LucideSquareUserRoundIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
