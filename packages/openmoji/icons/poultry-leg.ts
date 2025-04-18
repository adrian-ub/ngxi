import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPoultryLegIcon],svg[openmoji-poultry-leg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M33.493 61a3 3 0 0 0 2.5-1.346a3 3 0 0 0 2.5 1.346a3 3 0 0 0 0-6v-6h-5v6a3 3 0 1 0 0 6"></svg:path><svg:path fill="#f4aa41" d="M40.877 12.786c-.777-1.94-2.667-3.314-4.884-3.314s-4.106 1.375-4.884 3.314C24.692 21.011 24.32 32.41 29.993 41v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5.001c5.673-8.59 5.302-19.988-1.116-28.213"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M33.493 61a3 3 0 0 0 2.5-1.346a3 3 0 0 0 2.5 1.346a3 3 0 0 0 0-6v-6h-5v6a3 3 0 1 0 0 6m7.384-48.214c-.777-1.94-2.667-3.314-4.884-3.314s-4.106 1.375-4.884 3.314C24.692 21.011 24.32 32.41 29.993 41v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5.001c5.673-8.59 5.302-19.988-1.116-28.213"></svg:path>`,
})
export class OpenmojiPoultryLegIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
