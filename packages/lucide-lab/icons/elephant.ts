import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabElephantIcon],svg[lucide-lab-elephant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.5 12H14c-2.8 0-5-2.2-5-5V5a2 2 0 0 1 2-2h2c1.5 0 2.8.8 3.4 2H19c1.7 0 3 1.3 3 3v10m-4-8h.01"></svg:path><svg:path d="M14 10a4 4 0 0 0 4 4a4 4 0 0 1 4 4a2 2 0 0 1-4 0m-8-2v5"></svg:path><svg:path d="M18 14a4 4 0 0 0-4 4v3H6v-2.6c0-1.1-.8-2.3-1.7-3C2.9 14.3 2 12.8 2 11c0-3.3 3.1-6 7-6m-7 6v7"></svg:path></svg:g>`,
})
export class LucideLabElephantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
