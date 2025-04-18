import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCaseSnakeIcon],svg[lucide-lab-case-snake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 11v5"></svg:path><svg:circle cx="4.5" cy="13.5" r="2.5"></svg:circle><svg:path d="M11 16h2"></svg:path><svg:circle cx="19.5" cy="13.5" r="2.5"></svg:circle><svg:path d="M17 9v7"></svg:path></svg:g>`,
})
export class LucideLabCaseSnakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
