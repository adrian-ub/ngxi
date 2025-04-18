import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHockeyIcon],svg[lucide-lab-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="17" cy="19" r="3"></svg:circle><svg:path d="M2.8 13a5.95 5.95 0 1 0 10.4 6l8.5-14a1.94 1.94 0 1 0-3.4-2L9.7 17a1.88 1.88 0 1 1-3.4-2a1.94 1.94 0 1 0-3.5-2m17.8-6.2l-3.3-2.1m-2.1 3.4l3.3 2.1"></svg:path></svg:g>`,
})
export class LucideLabHockeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
