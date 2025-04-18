import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewSplitHorizontalIcon],svg[mdi-view-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18v2H3zm0 6V9h18v2zm0 8v-6h18v6z"></svg:path>`,
})
export class MdiViewSplitHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
