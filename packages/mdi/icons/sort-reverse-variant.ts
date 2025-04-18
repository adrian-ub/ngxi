import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortReverseVariantIcon],svg[mdi-sort-reverse-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h12v2H3m0 5v-2h18v2M3 6h6v2H3Z"></svg:path>`,
})
export class MdiSortReverseVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
