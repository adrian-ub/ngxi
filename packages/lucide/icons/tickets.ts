import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTicketsIcon],svg[lucide-tickets-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2"></svg:path><svg:rect width="20" height="13" x="2" y="8" rx="2"></svg:rect></svg:g>`,
})
export class LucideTicketsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
