import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsPlayingDiamondMultipleIcon],svg[mdi-cards-playing-diamond-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v18c0 1.1.9 2 2 2h12v-2H5V4zm16-4H9C7.9 0 7 .9 7 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-5 15l-3-5l3-5l3 5z"></svg:path>`,
})
export class MdiCardsPlayingDiamondMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
