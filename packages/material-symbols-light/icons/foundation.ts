import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFoundationIcon],svg[material-symbols-light-foundation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.692 20v-3.77H3.75v-1h1.942V9.947L2.604 12.25L2 11.458L12 4l10.02 7.458l-.604.792l-3.089-2.304v5.285h1.923v1h-1.923V20h-1v-3.77H12.5V20h-1v-3.77H6.692V20zm1-4.77H11.5V5.622L6.692 9.21zm5.808 0h4.827V9.21L12.5 5.62z"></svg:path>`,
})
export class MaterialSymbolsLightFoundationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
