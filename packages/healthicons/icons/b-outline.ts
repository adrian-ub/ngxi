import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBOutlineIcon],svg[healthicons-b-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h10a9 9 0 0 1 6.708 15A9 9 0 0 1 26 39H16a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h10a7 7 0 0 0 4.63-12.25a1 1 0 0 1 0-1.5A7 7 0 0 0 26 11zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1zm2 1v6h7a3 3 0 1 0 0-6zm-2 11a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1zm2 1v6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsBOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
