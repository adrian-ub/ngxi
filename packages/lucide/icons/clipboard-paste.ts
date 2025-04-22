import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardPasteIcon],svg[lucide-clipboard-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 14h10M16 4h2a2 2 0 0 1 2 2v1.344M17 18l4-4l-4-4"></svg:path><svg:path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"></svg:path><svg:rect width="8" height="4" x="8" y="2" rx="1"></svg:rect></svg:g>`,
})
export class LucideClipboardPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
