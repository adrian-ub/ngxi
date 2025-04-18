import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTieBowRibbonIcon],svg[lucide-lab-tie-bow-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 7h4v4h-4zM8 9h2"></svg:path><svg:path d="M10 7C8.8 5.5 6.6 4 4 4C2.9 4 2 6.2 2 9s.9 5 2 5c2.6 0 4.8-1.5 6-3m4-2h2m-2 2c1.2 1.5 3.4 3 6 3c1.1 0 2-2.2 2-5s-.9-5-2-5c-2.6 0-4.8 1.5-6 3"></svg:path><svg:path d="M5.5 13.83L4 20l3-1l2 2l2.5-10m7 2.83L20 20l-3-1l-2 2l-2.5-10"></svg:path></svg:g>`,
})
export class LucideLabTieBowRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
