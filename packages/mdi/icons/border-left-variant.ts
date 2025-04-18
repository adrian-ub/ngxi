import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderLeftVariantIcon],svg[mdi-border-left-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2V3h-2m4 18h2v-2h-2m0-6h2v-2h-2m0-6h2V3h-2m0 14h2v-2h-2m-4 6h2v-2h-2m4-10h2V7h-2M3 21h2V3H3m4 2h2V3H7m0 18h2v-2H7m4-14h2V3h-2m0 18h2v-2h-2z"></svg:path>`,
})
export class MdiBorderLeftVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
