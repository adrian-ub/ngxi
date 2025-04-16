import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideQrCodeIcon],svg[lucide-qr-code-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="5" height="5" x="3" y="3" rx="1"></svg:rect><svg:rect width="5" height="5" x="16" y="3" rx="1"></svg:rect><svg:rect width="5" height="5" x="3" y="16" rx="1"></svg:rect><svg:path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></svg:path></svg:g>`,
})
export class LucideQrCodeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
