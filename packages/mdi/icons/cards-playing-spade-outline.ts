import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingSpadeOutlineIcon],svg[mdi-cards-playing-spade-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H7V4h10zM12 7.7l-.6.5c-2 1.9-3.4 3.1-3.4 4.6C8 14 9 15 10.2 15q.6 0 1.2-.3l-.9 2.3h3l-.9-2.3c.3.2.8.3 1.2.3c1.2 0 2.2-.9 2.2-2.2c0-1.5-1.4-2.7-3.4-4.6z"></svg:path>`,
})
export class MdiCardsPlayingSpadeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
