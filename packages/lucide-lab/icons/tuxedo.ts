import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTuxedoIcon],svg[lucide-lab-tuxedo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 3v2l4-2v2Z"></svg:path><svg:path d="M18 3h1a2 2 0 0 1 1.7 3A5271 5271 0 0 0 12 21S6.8 12 3.3 6A2 2 0 0 1 5 3h1m6 6h.01M12 13h.01"></svg:path><svg:path d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"></svg:path></svg:g>`,
})
export class LucideLabTuxedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
