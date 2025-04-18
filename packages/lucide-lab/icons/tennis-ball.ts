import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTennisBallIcon],svg[lucide-lab-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12c5.5 0 10-4.5 10-10"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M22 12c-5.5 0-10 4.5-10 10"></svg:path></svg:g>`,
})
export class LucideLabTennisBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
