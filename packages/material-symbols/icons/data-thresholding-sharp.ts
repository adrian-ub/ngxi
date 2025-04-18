import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataThresholdingSharpIcon],svg[material-symbols-data-thresholding-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.725 16L5 17.725V19h.85l3-3zm3.95 0l-3 3H9.8l3-3zm3.725 0l-3 3h2.125l3-3zm3.75 0l-3 3h2.125L19 17.275V16zm-1.8-9.5l-3.675 3.675l-2-2L6.25 12.6l1.4 1.4l3.025-3l2 2l5.075-5.1zM3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsDataThresholdingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
