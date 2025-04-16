import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHeading6Icon],svg[lucide-heading-6-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 12h8m-8 6V6m8 12V6"></svg:path><svg:circle cx="19" cy="16" r="2"></svg:circle><svg:path d="M20 10c-2 2-3 3.5-3 6"></svg:path></svg:g>`,
})
export class LucideHeading6Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
