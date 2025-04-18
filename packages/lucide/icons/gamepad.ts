import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGamepadIcon],svg[lucide-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 12h4m-2-2v4m7-1h.01M18 11h.01"></svg:path><svg:rect width="20" height="12" x="2" y="6" rx="2"></svg:rect></svg:g>`,
})
export class LucideGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
