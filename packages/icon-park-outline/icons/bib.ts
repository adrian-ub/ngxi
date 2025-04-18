import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBibIcon],svg[icon-park-outline-bib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 14c0 8-14 8-14 0c0-5 5-6 3-9S8 7 8 16v16c0 8.5 8.5 12 15.5 12S40 41 40 32V16C40 7 29 2 27 5s4 4 4 9Z"></svg:path><svg:path stroke-linecap="round" d="m19 32l5-5l5 5l-5 5z"></svg:path></svg:g>`,
})
export class IconParkOutlineBibIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
