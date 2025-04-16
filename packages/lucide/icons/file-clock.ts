import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileClockIcon],svg[lucide-file-clock-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:circle cx="8" cy="16" r="6"></svg:circle><svg:path d="M9.5 17.5L8 16.25V14"></svg:path></svg:g>`,
})
export class LucideFileClockIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
