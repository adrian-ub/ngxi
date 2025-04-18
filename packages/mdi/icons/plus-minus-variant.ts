import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlusMinusVariantIcon],svg[mdi-plus-minus-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h3V4h2v3h3v2H8v3H6V9H3zm10 8h8v2h-8zm3.04-12h2.31L7.96 21H5.65z"></svg:path>`,
})
export class MdiPlusMinusVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
