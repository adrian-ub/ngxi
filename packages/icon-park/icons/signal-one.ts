import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalOneIcon],svg[icon-park-signal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M38.1421 38.1422C41.7614 34.5229 44 29.5229 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85791"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M9.85786 9.85791C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85786 38.1422"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M15.1005 14.1006C12.567 16.6341 11 20.1341 11 24.0001C11 27.8661 12.567 31.3661 15.1005 33.8996"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M32.8994 33.8996C35.4329 31.3661 36.9999 27.8661 36.9999 24.0001C36.9999 20.1341 35.4329 16.6341 32.8994 14.1006"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44V34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4V14"></svg:path><svg:path fill="#000" d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z"></svg:path></svg:g>`,
})
export class IconParkSignalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
