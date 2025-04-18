import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingSpadeMultipleOutlineIcon],svg[mdi-cards-playing-spade-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 0H9C7.9 0 7 .9 7 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 18H9V2h10zM3 4v18c0 1.1.9 2 2 2h12v-2H5V4zm11 1.7l-.6.5c-2 1.9-3.4 3.1-3.4 4.6c0 1.2 1 2.2 2.2 2.2q.6 0 1.2-.3l-.9 2.3h3l-.9-2.3c.3.2.8.3 1.2.3c1.2 0 2.2-.9 2.2-2.2c0-1.5-1.4-2.7-3.4-4.6z"></svg:path>`,
})
export class MdiCardsPlayingSpadeMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
