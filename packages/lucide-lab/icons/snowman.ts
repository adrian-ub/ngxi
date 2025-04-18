import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSnowmanIcon],svg[lucide-lab-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path d="M12 14h.01M12 18h.01M2 9h2V7m3 5L4 9m13.8 2.1L20 9m0-2v2h2M9 8.7a7 7 0 1 0 6 0M5 22h14"></svg:path></svg:g>`,
})
export class LucideLabSnowmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
