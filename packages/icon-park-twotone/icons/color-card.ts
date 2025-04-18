import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneColorCardIcon],svg[icon-park-twotone-color-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipTColorCard0" stroke="#fff" d="M24.485 32H44v12H12.5"></svg:path><svg:mask id="ipTColorCard1"><svg:g fill="none"><svg:path fill="#555" d="M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44a6 6 0 0 0 6-6V23.515M10 44a6 6 0 0 1-6-6V4h12v19.515M10 44h34V32H24.485M5.757 42.243a6 6 0 0 0 8.486 0L24.485 32M16 23.515L35.015 4.5l.47-.5l8.5 8.5l-19.5 19.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.243 42.243L43.985 12.5l-8.5-8.5L16 23.515"></svg:path><svg:use href="#ipTColorCard0" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:use><svg:use href="#ipTColorCard0" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:use><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTColorCard1)"></svg:path>`,
})
export class IconParkTwotoneColorCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
