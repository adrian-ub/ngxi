import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSlackIcon],svg[lucide-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="3" height="8" x="13" y="2" rx="1.5"></svg:rect><svg:path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></svg:path><svg:rect width="3" height="8" x="8" y="14" rx="1.5"></svg:rect><svg:path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></svg:path><svg:rect width="8" height="3" x="14" y="13" rx="1.5"></svg:rect><svg:path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></svg:path><svg:rect width="8" height="3" x="2" y="8" rx="1.5"></svg:rect><svg:path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></svg:path></svg:g>`,
})
export class LucideSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
