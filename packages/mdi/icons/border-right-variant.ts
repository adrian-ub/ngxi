import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderRightVariantIcon],svg[mdi-border-right-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h2V3h-2m4 2h2V3h-2m0 18h2v-2h-2m4 2h2V3h-2M3 9h2V7H3m0 10h2v-2H3m0-2h2v-2H3m8 10h2v-2h-2m-8 2h2v-2H3M7 5h2V3H7M3 5h2V3H3m4 18h2v-2H7z"></svg:path>`,
})
export class MdiBorderRightVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
