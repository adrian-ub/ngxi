import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignRealEstateIcon],svg[mdi-sign-real-estate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H8c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h10c1.11 0 2-.89 2-2v-6a2 2 0 0 0-2-2m-4 8H8v-2h6zm4-4H8v-2h10zm4-6H4v16H2V2h2v2h18z"></svg:path>`,
})
export class MdiSignRealEstateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
