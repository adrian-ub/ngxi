import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCabinIcon],svg[lucide-lab-cabin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2.6 10.4a2.12 2.12 0 1 0 3.02 2.98L12 7l6.4 6.4a2.12 2.12 0 1 0 2.979-3.021L13.7 2.7a2.4 2.4 0 0 0-3.404.004Z"></svg:path><svg:path d="M14 22v-7a2 2 0 0 0-4 0v7"></svg:path><svg:path d="M14 14h6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6h6m-6 4h6m4 0h6"></svg:path></svg:g>`,
})
export class LucideLabCabinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
