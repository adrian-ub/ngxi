import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPigIcon],svg[lucide-lab-pig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 4.5a4.12 4.12 0 0 0-5.5 1.6C13 6 12.5 6 12 6c-4.4 0-8 2.7-8 6c0 1.5.8 2.9 2 4v2a2 2 0 0 0 2 2h2v-2.2a12.3 12.3 0 0 0 4 0V19c0 .6.4 1 1 1h3v-4c.7-.6 1.2-1.2 1.5-2H21c.6 0 1-.4 1-1v-3h-2.5c-.4-1-1.2-1.8-2.2-2.5ZM16 11h.01"></svg:path><svg:path d="M2.3 7a2 2 0 0 0 2.2 2.9"></svg:path></svg:g>`,
})
export class LucideLabPigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
