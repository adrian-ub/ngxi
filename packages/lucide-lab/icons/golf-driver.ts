import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGolfDriverIcon],svg[lucide-lab-golf-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="9" r="2"></svg:circle><svg:path d="M6 11v2M22 2l-9.3 14.1c-.4.6-1 .9-1.7.9H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2c1.6 0 3.1-.7 4.1-2.1l2.6-3.8"></svg:path></svg:g>`,
})
export class LucideLabGolfDriverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
