import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeVariantOutlineIcon],svg[mdi-pine-tree-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12L12 2L5 12h1.86L3 18h7v4h4v-4h7l-3.86-6zm-3.84-2H13.5l3.84 6H6.67l3.86-6H8.84L12 5.5z"></svg:path>`,
})
export class MdiPineTreeVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
