import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabEscalatorArrowDownLeftIcon],svg[lucide-lab-escalator-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="3" r="1"></svg:circle><svg:path d="M9 7v3m8-7c-.6 0-1.3.3-1.7.7L6 13H4a2 2 0 0 0 0 4h3c.6 0 1.3-.3 1.7-.7L18 7h2a2 2 0 0 0 0-4Zm5 10l-9 9m0-4v4h4"></svg:path></svg:g>`,
})
export class LucideLabEscalatorArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
