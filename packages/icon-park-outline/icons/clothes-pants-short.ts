import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesPantsShortIcon],svg[icon-park-outline-clothes-pants-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 36l2-24h32l2 24H26.842L24 25l-2.842 11zm18-24l3 7m-3-7l-4 7.5M18 12h12"></svg:path>`,
})
export class IconParkOutlineClothesPantsShortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
