import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsVariantIcon],svg[mdi-cards-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m1 2v8h12V4zm14 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16zm0 4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16z"></svg:path>`,
})
export class MdiCardsVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
