import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideToggleLeftIcon],svg[lucide-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="12" r="3"></svg:circle><svg:rect width="20" height="14" x="2" y="5" rx="7"></svg:rect></svg:g>`,
})
export class LucideToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
