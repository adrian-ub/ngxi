import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardCopyIcon],svg[lucide-clipboard-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="8" height="4" x="8" y="2" rx="1" ry="1"></svg:rect><svg:path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M16 4h2a2 2 0 0 1 2 2v4m1 4H11"></svg:path><svg:path d="m15 10l-4 4l4 4"></svg:path></svg:g>`,
})
export class LucideClipboardCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
