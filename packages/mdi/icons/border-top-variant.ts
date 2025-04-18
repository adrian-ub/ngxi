import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderTopVariantIcon],svg[mdi-border-top-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h2v-2h-2m-4 2h2v-2h-2m4-2h2v-2h-2M3 5h18V3H3m16 10h2v-2h-2m0-2h2V7h-2M3 9h2V7H3m0 6h2v-2H3m0 10h2v-2H3m0-2h2v-2H3m8 6h2v-2h-2m-4 2h2v-2H7z"></svg:path>`,
})
export class MdiBorderTopVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
