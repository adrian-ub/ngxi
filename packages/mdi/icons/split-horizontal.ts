import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSplitHorizontalIcon],svg[mdi-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 5.016h18v1.968H3V5.016zm0 6V9h18v2.016H3zm0 7.968v-6h18v6H3z" fill="currentColor"></svg:path>`,
})
export class MdiSplitHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
