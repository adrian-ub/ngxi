import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderBottomVariantIcon],svg[mdi-border-bottom-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v2h2m-2 4h18v-2H3m2-8H3v2h2m14-4h2V7h-2m0-2h2V3h-2M5 7H3v2h2m14 8h2v-2h-2m0-2h2v-2h-2m-2-8h-2v2h2m-4-2h-2v2h2M5 3H3v2h2m4-2H7v2h2"></svg:path>`,
})
export class MdiBorderBottomVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
