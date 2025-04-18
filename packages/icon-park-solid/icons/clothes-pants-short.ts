import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClothesPantsShortIcon],svg[icon-park-solid-clothes-pants-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSClothesPantsShort0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m6 36l2-24h32l2 24H26.842L24 25l-2.842 11z"></svg:path><svg:path stroke="#000" d="m24 12l3 7m-3-7l-4 7.5"></svg:path><svg:path stroke="#fff" d="M18 12h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSClothesPantsShort0)"></svg:path>`,
})
export class IconParkSolidClothesPantsShortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
