import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBatBallIcon],svg[lucide-lab-bat-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18" cy="18" r="4"></svg:circle><svg:path d="m4 8l10 10m6.8-2.8c1.9-3.4 1.4-7.7-1.4-10.6c-3.5-3.5-9.1-3.5-12.5 0c-4.7 4.7-5.1 6.9-1.4 11.1l-2.9 2.9c-.8.8-.8 2 0 2.8s2 .8 2.8 0l2.9-2.9c2.6 2.3 4.5 3 6.6 2.1"></svg:path></svg:g>`,
})
export class LucideLabBatBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
