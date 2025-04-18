import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCarpenterOutlineSharpIcon],svg[material-symbols-carpenter-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.075 22.7l-4.25-4.225l1.425-1.425L3.1 5.4L7 1.5l14.15 14.125zm-1.4-7.075l2.825-2.8l-8.5-8.5l-1.3 1.3zm1.4 4.25L18.3 15.65l-1.4-1.425l-4.25 4.25zm-1.4-4.25l2.825-2.8z"></svg:path>`,
})
export class MaterialSymbolsCarpenterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
