import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphoneArrowDownVariantIcon],svg[mdi-cellphone-arrow-down-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 14l5-5l-1.4-1.4l-2.6 2.6V3h-2v7.2l-2.6-2.6L13 9zm1 2v5c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h7v4H7v14h10v-3z"></svg:path>`,
})
export class MdiCellphoneArrowDownVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
