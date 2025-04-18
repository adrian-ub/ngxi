import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGlassesSquareIcon],svg[lucide-lab-glasses-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2.2 13.1l3.1-6.4C5.8 5.7 6.8 5 8 5"></svg:path><svg:rect width="8" height="6" x="2" y="12" rx="2"></svg:rect><svg:path d="M14 15a2 2 0 0 0-4 0"></svg:path><svg:rect width="8" height="6" x="14" y="12" rx="2"></svg:rect><svg:path d="m21.8 13.1l-3.1-6.4C18.2 5.7 17.2 5 16 5"></svg:path></svg:g>`,
})
export class LucideLabGlassesSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
