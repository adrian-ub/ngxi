import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHairdryerIcon],svg[lucide-lab-hairdryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="8" r="2"></svg:circle><svg:path d="M18 11s-7 3-10 3A6 6 0 0 1 8 2c3 0 10 3 10 3Zm0-6l4-2v10l-4-2"></svg:path><svg:path d="m7 13.9l.8 5.1c.1.5.6 1 1.2 1h2c.6 0 .9-.4.8-1l-.9-5.5m.74 4.5s3.3-2 7.3-2a2 2 0 0 1 0 4H17a2 2 0 0 0-2 2"></svg:path></svg:g>`,
})
export class LucideLabHairdryerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
