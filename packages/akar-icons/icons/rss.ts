import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsRssIcon],svg[akar-icons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 10.419c6.068-.32 9.9 3.513 9.582 9.581"></svg:path><svg:circle cx="5" cy="19" r="1"></svg:circle><svg:path d="M4 4.03C14.114 3.5 20.501 9.887 19.97 20"></svg:path></svg:g>`,
})
export class AkarIconsRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
