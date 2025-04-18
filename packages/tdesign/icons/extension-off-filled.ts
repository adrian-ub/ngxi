import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExtensionOffFilledIcon],svg[tdesign-extension-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l2 2H2v6a3 3 0 1 1 0 6v6h6a3 3 0 1 1 6 0h6v-.586l2 2l1.41-1.41L2 .595zm18.222 15.402A3 3 0 0 0 20 10V4h-6a3 3 0 0 0-5.992-.226z"></svg:path>`,
})
export class TdesignExtensionOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
