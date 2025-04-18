import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingHeartMultipleOutlineIcon],svg[mdi-cards-playing-heart-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 0H9C7.9 0 7 .9 7 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 18H9V2h10zM3 4v18c0 1.1.9 2 2 2h12v-2H5V4zm9.2 3C11 7 10 8 10 9.2c0 1.5 1.4 2.7 3.4 4.6l.6.5l.6-.5c2-1.9 3.4-3.1 3.4-4.6C18 7.9 17 7 15.8 7c-.7 0-1.4.3-1.8.8c-.4-.5-1.1-.8-1.8-.8"></svg:path>`,
})
export class MdiCardsPlayingHeartMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
