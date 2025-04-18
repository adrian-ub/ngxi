import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideKeyboardIcon],svg[lucide-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01"></svg:path><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect></svg:g>`,
})
export class LucideKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
