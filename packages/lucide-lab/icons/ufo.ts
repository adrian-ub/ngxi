import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabUfoIcon],svg[lucide-lab-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 8c0 1-3 2-6 2S6 9 6 8a6 6 0 0 1 12 0M7 13h.01M12 14h.01M17 13h.01"></svg:path><svg:path d="M6 8.1c-2.4 1-4 2.6-4 4.4c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5c0-1.8-1.6-3.4-4-4.4M7 22l2-4m8 4l-2-4"></svg:path></svg:g>`,
})
export class LucideLabUfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
