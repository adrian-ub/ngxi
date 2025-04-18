import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabRugbyIcon],svg[lucide-lab-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.7 2.3c-.2-.2-.9-.4-1.7-.3a4.6 4.6 0 0 0-3.7 5.7c.3.2.9.4 1.7.3a4.6 4.6 0 0 0 3.7-5.7M20 12H4"></svg:path><svg:rect width="4" height="6" x="2" y="16" rx="1"></svg:rect><svg:path d="M4 2v14"></svg:path><svg:rect width="4" height="6" x="18" y="16" rx="1"></svg:rect><svg:path d="M20 2v14"></svg:path></svg:g>`,
})
export class LucideLabRugbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
