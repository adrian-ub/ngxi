import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingSpadeIcon],svg[mdi-cards-playing-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.2 13q-.6 0-1.2-.3l.9 2.3h-3l.9-2.3q-.6.3-1.2.3C9 15 8 14 8 12.8c0-1.5 1.4-2.7 3.4-4.6l.6-.5l.6.5c2 1.9 3.4 3.1 3.4 4.6c0 1.3-1 2.2-2.2 2.2"></svg:path>`,
})
export class MdiCardsPlayingSpadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
