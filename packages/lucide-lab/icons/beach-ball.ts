import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBeachBallIcon],svg[lucide-lab-beach-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M19.1 4.9c-1.6-1.6-6 .3-9.9 4.2S3.4 17.4 5 19s6-.3 9.9-4.2c3.8-3.9 5.7-8.3 4.2-9.9"></svg:path></svg:g>`,
})
export class LucideLabBeachBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
