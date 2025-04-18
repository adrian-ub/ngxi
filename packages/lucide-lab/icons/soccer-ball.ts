import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSoccerBallIcon],svg[lucide-lab-soccer-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M11.9 6.7s-3 1.3-5 3.6c0 0 0 3.6 1.9 5.9c0 0 3.1.7 6.2 0c0 0 1.9-2.3 1.9-5.9c0 .1-2-2.3-5-3.6m0 0V2m5 8.4s3-1.4 4.5-1.6M15 16.3s1.9 2.7 2.9 3.7m-9.1-3.7S6.9 19 6 20"></svg:path><svg:path d="M2.6 8.7C4 9 7 10.4 7 10.4"></svg:path></svg:g>`,
})
export class LucideLabSoccerBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
