import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTargetIcon],svg[lucide-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class LucideTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
