import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareLockIcon],svg[lucide-message-square-lock-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 15v-2a2 2 0 1 0-4 0v2"></svg:path><svg:path d="M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"></svg:path><svg:rect width="8" height="5" x="13" y="15" rx="1"></svg:rect></svg:g>`,
})
export class LucideMessageSquareLockIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
