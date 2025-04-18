import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLockKeyholeOpenIcon],svg[lucide-lock-keyhole-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="16" r="1"></svg:circle><svg:rect width="18" height="12" x="3" y="10" rx="2"></svg:rect><svg:path d="M7 10V7a5 5 0 0 1 9.33-2.5"></svg:path></svg:g>`,
})
export class LucideLockKeyholeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
