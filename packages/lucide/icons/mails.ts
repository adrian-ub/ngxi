import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMailsIcon],svg[lucide-mails-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="13" x="6" y="4" rx="2"></svg:rect><svg:path d="m22 7l-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7M2 8v11c0 1.1.9 2 2 2h14"></svg:path></svg:g>`,
})
export class LucideMailsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
