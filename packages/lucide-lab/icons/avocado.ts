import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabAvocadoIcon],svg[lucide-lab-avocado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 7a4.95 4.95 0 0 0-8.6-3.4c-1.5 1.6-1.6 1.8-5 2.6a8 8 0 1 0 9.4 9.5c.7-3.4 1-3.6 2.6-5c1-1 1.6-2.3 1.6-3.7"></svg:path><svg:circle cx="10" cy="14" r="3.5"></svg:circle></svg:g>`,
})
export class LucideLabAvocadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
