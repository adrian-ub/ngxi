import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquareUserIcon],svg[lucide-square-user-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></svg:path></svg:g>`,
})
export class LucideSquareUserIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
