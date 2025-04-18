import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNewsFillIcon],svg[ri-news-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 4h6v6H6zm2 2v2h2V9zm10 0h-4V7h4zm-4 4v-2h4v2zm-8 4v-2h12v2z"></svg:path>`,
})
export class RiNewsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
