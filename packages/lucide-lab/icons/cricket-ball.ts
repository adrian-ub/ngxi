import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCricketBallIcon],svg[lucide-lab-cricket-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 8L3.6 6.6M8 11l1 1m3 3l1 1m3 3l1.4 1.4"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 5L6.6 3.6M11 8l1 1m3 3l1 1m4.4 4.4L19 16"></svg:path></svg:g>`,
})
export class LucideLabCricketBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
