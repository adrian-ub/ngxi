import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFootballIcon],svg[lucide-lab-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 3c-.8-.8-3-1.2-5.8-.9s-6 1.6-8.8 4.4s-4 6-4.4 8.8s.1 5 .9 5.8s3 1.2 5.8.9s6-1.6 8.8-4.4s4-6 4.4-8.8s-.1-5-.9-5.8M6.4 17.6L9 15"></svg:path><svg:path d="M8.7 21.9c-.8-3.3-3.4-5.8-6.7-6.7m6.1-1.3l2 2M11 11l2 2m.9-4.9l2 2m-.6-8c.8 3.3 3.4 5.8 6.6 6.6M15 9l2.6-2.6"></svg:path></svg:g>`,
})
export class LucideLabFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
