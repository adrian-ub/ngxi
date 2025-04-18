import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRedditIcon],svg[meteor-icons-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="20" cy="5" r="2"></svg:circle><svg:path d="M5 10.5a14 14 0 0 1 14 0a2.4 2.4 0 1 1 2.5 4a9.6 6.6 0 1 1-19 0a2.4 2.4 0 1 1 2.5-4m7-1.9l1.5-6.1l4.6 1.7M10 18q2 1 4 0m1-4"></svg:path></svg:g>`,
})
export class MeteorIconsRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
