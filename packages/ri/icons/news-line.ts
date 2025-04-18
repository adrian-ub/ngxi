import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNewsLineIcon],svg[ri-news-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h6v6H6zm2 2v2h2V9zm6 0h4V7h-4zm4 4h-4v-2h4zM6 15v2h12v-2z"></svg:path>`,
})
export class RiNewsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
