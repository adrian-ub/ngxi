import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowSplitIcon],svg[material-symbols-arrow-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13v-2h7.6l5-5H14V4h6v6h-2V7.4L12.4 13zm10 7v-2h2.6l-3.2-3.15l1.45-1.45L18 16.6V14h2v6z"></svg:path>`,
})
export class MaterialSymbolsArrowSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
