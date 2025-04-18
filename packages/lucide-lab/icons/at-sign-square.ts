import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabAtSignSquareIcon],svg[lucide-lab-at-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="2"></svg:rect><svg:path d="M14 17.7a6 6 0 1 1 4-5.7a2 2 0 0 1-4 0"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class LucideLabAtSignSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
