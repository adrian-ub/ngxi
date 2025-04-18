import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTieBowIcon],svg[lucide-lab-tie-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 10h4v4h-4zm-2 2h2"></svg:path><svg:path d="M10 10C8.8 8.5 6.6 7 4 7c-1.1 0-2 2.2-2 5s.9 5 2 5c2.6 0 4.8-1.5 6-3m4-2h2m-2 2c1.2 1.5 3.4 3 6 3c1.1 0 2-2.2 2-5s-.9-5-2-5c-2.6 0-4.8 1.5-6 3"></svg:path></svg:g>`,
})
export class LucideLabTieBowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
