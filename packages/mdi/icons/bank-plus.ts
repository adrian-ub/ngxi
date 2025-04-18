import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankPlusIcon],svg[mdi-bank-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM11.5 1L21 6v2H2V6zm4.5 9h3v2.08L18 12c-.7 0-1.37.12-2 .34zM2 22v-3h10.08c.19 1.14.71 2.17 1.45 3zm8-12h3v4.68c-.46.69-.78 1.47-.92 2.32H10zm-6 0h3v7H4z"></svg:path>`,
})
export class MdiBankPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
