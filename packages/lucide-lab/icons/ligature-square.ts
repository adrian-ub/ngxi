import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLigatureSquareIcon],svg[lucide-lab-ligature-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M7 12h3m4.4-4a3.5 3.5 0 0 0-5.9 2.5V17m1.5 0H7m7-5h1.5v5m1.5 0h-3"></svg:path></svg:g>`,
})
export class LucideLabLigatureSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
