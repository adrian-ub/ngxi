import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFoundationIcon],svg[material-symbols-foundation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-4H3v-2h2v-4.15L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V15h2v2h-2v4h-2v-4h-4v4h-2v-4H7v4zm2-6h4V6.275l-4 3.05zm6 0h4V9.325l-4-3.05z"></svg:path>`,
})
export class MaterialSymbolsFoundationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
