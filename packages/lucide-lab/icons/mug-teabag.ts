import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabMugTeabagIcon],svg[lucide-lab-mug-teabag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm1-4a1 1 0 0 1 1-1a1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1a1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1a1 1 0 0 0 1-1M9 8v3"></svg:path><svg:path d="M11 16v-3.5L9 11l-2 1.5V16Z"></svg:path></svg:g>`,
})
export class LucideLabMugTeabagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
