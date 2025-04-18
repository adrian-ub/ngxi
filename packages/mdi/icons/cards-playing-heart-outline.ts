import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingHeartOutlineIcon],svg[mdi-cards-playing-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H7V4h10zM10.2 9C9 9 8 10 8 11.2c0 1.5 1.4 2.7 3.4 4.6l.6.5l.6-.5c2-1.9 3.4-3.1 3.4-4.6C16 9.9 15 9 13.8 9c-.7 0-1.4.3-1.8.8c-.4-.5-1.1-.8-1.8-.8"></svg:path>`,
})
export class MdiCardsPlayingHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
