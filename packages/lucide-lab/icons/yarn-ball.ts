import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabYarnBallIcon],svg[lucide-lab-yarn-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10 6h10m-6 4h7.8M7.2 3.2l13.6 13.6M4 6l15.3 15.3c.4.4 1.2.7 1.7.7h1M2.2 10.2l11.6 11.6"></svg:path></svg:g>`,
})
export class LucideLabYarnBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
