import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStreetcompleteAltIcon],svg[arcticons-streetcomplete-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.86 7.788H10.83L6.5 12.184l4.33 4.395h18.03ZM15.893 19.581H37.17l4.33 4.41l-4.33 4.41H15.893ZM24.001 4.5l.003 3.288m-.007 8.791v3.002M23.996 43.5l.001-15.098"></svg:path>`,
})
export class ArcticonsStreetcompleteAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
