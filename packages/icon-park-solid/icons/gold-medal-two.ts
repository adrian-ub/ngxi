import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGoldMedalTwoIcon],svg[icon-park-solid-gold-medal-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSGoldMedalTwo0"><svg:g fill="none"><svg:path fill="#fff" d="M36 32a11.97 11.97 0 0 0-4-8.944A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12"></svg:path><svg:path fill="#fff" d="M16 4h16v19.056A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4h16M16 4H8v10l8 6m0-16v16M32 4h8v10l-8 6m0-16v16m-16 3.056A11.96 11.96 0 0 1 24 20c3.073 0 5.877 1.155 8 3.056m-16 0A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12a11.97 11.97 0 0 0-4-8.944m-16 0V20m16 3.056V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 4h8v10l-8 6M16 4H8v10l8 6"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 32a11.97 11.97 0 0 0-4-8.944A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4h16v19.056A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 37V27l-2 1m2 9h2m-2 0h-2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSGoldMedalTwo0)"></svg:path>`,
})
export class IconParkSolidGoldMedalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
