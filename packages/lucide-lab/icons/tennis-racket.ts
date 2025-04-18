import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTennisRacketIcon],svg[lucide-lab-tennis-racket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.7 4.7c3-3 7.4-3.6 9.8-1.2s1.8 6.8-1.2 9.8a9.5 9.5 0 0 1-4.3 2.5c-2.1.5-4.1.1-5.5-1.3S7.7 11.1 8.2 9a9.5 9.5 0 0 1 2.5-4.3"></svg:path><svg:path d="M8.2 9L6 18l9-2.2M2 22l4-4"></svg:path><svg:circle cx="20" cy="20" r="2"></svg:circle></svg:g>`,
})
export class LucideLabTennisRacketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
