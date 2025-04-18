import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideComputerIcon],svg[lucide-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="14" height="8" x="5" y="2" rx="2"></svg:rect><svg:rect width="20" height="8" x="2" y="14" rx="2"></svg:rect><svg:path d="M6 18h2m4 0h6"></svg:path></svg:g>`,
})
export class LucideComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
