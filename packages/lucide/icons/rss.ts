import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRssIcon],svg[lucide-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"></svg:path><svg:circle cx="5" cy="19" r="1"></svg:circle></svg:g>`,
})
export class LucideRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
