import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSoccerPitchIcon],svg[lucide-lab-soccer-pitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5v5m0 4v5"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M2 9h4v6H2"></svg:path><svg:path d="M3 19c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1Z"></svg:path><svg:path d="M22 15h-4V9h4"></svg:path></svg:g>`,
})
export class LucideLabSoccerPitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
