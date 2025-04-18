import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLingerieIcon],svg[lucide-lab-lingerie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 2v2a2 2 0 0 0-2 2v2c0 1.7 1.3 3 3 3h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2c1.7 0 3-1.3 3-3V6a2 2 0 0 0-2-2"></svg:path><svg:path d="M10 9c0-2.8-2.2-5-5-5m14-2v2c-2.8 0-5 2.2-5 5M3 15a7 7 0 0 1 7 7h4a7 7 0 0 1 7-7Z"></svg:path></svg:g>`,
})
export class LucideLabLingerieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
