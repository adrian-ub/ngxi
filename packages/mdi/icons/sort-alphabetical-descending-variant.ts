import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortAlphabeticalDescendingVariantIcon],svg[mdi-sort-alphabetical-descending-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.75 19l-3.25 3.25L9.25 19zm-6.86-4.7H6L5.28 17H2.91L6 7h3l3.13 10H9.67zm-2.56-1.62h2.23l-.63-2.12l-.26-.97l-.25-.96h-.03l-.22.97l-.24.98zM13.05 17v-1.26l4.75-6.77v-.06h-4.3V7h7.23v1.34L16.09 15v.08h4.71V17z"></svg:path>`,
})
export class MdiSortAlphabeticalDescendingVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
