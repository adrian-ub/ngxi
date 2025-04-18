import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOrderAlphabeticalDescendingIcon],svg[mdi-order-alphabetical-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13H5c-1.1 0-2 .9-2 2v6h2v-2h2v2h2v-6a2 2 0 0 0-2-2m0 4H5v-2h2M9 3v2L5.67 9H9v2H3V9l3.33-4H3V3m9 2h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderAlphabeticalDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
