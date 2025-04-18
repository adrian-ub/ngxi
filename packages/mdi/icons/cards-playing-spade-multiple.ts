import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingSpadeMultipleIcon],svg[mdi-cards-playing-spade-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v18c0 1.1.9 2 2 2h12v-2H5V4zm16-4H9C7.9 0 7 .9 7 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-3.2 13q-.6 0-1.2-.3l.9 2.3h-3l.9-2.3q-.6.3-1.2.3C11 13 10 12 10 10.8c0-1.5 1.4-2.7 3.4-4.6l.6-.5l.6.5c2 1.9 3.4 3.1 3.4 4.6c0 1.3-1 2.2-2.2 2.2"></svg:path>`,
})
export class MdiCardsPlayingSpadeMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
