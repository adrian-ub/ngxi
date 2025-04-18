import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTieIcon],svg[lucide-lab-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.9 3c.1-.6.5-1 1.1-1h4c.6 0 1 .4 1.1 1l.9 15l-4 4l-4-4Zm5.95-.6L16 11.8m-6.3 1.35l6.5 8.5M22 5v16c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V5l3-3Z"></svg:path>`,
})
export class LucideLabTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
