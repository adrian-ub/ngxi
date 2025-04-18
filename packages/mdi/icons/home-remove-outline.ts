import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeRemoveOutlineIcon],svg[mdi-home-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.12l1.42 1.41L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18l-2.12-2.12M5 20v-8H2l10-9l10 9h-5v-1.81l-5-4.5l-5 4.5V18h5c0 .7.12 1.37.34 2z"></svg:path>`,
})
export class MdiHomeRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
