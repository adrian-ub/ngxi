import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsRssIcon],svg[rivet-icons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 3c6.075 0 11 4.925 11 11h2C15 6.82 9.18 1 2 1z"></svg:path><svg:path d="M2 5a9 9 0 0 1 9 9H9a7 7 0 0 0-7-7zm4 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class RivetIconsRssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
