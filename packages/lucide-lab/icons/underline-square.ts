import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabUnderlineSquareIcon],svg[lucide-lab-underline-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M15 7v3a3 3 0 1 1-6 0V7M7 17h10"></svg:path></svg:g>`,
})
export class LucideLabUnderlineSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
