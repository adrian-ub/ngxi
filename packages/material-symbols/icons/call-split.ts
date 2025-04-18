import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallSplitIcon],svg[material-symbols-call-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-7.6l-5-5V10H4V4h6v2H7.4l5.6 5.6V20zm3.85-9.4L13.4 9.15L16.6 6H14V4h6v6h-2V7.4z"></svg:path>`,
})
export class MaterialSymbolsCallSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
