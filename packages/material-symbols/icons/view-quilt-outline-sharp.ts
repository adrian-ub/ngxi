import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewQuiltOutlineSharpIcon],svg[material-symbols-view-quilt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm7.325-8H19V7h-8.675zm5.35 6H19v-4h-3.325zm-5.35 0h3.35v-4h-3.35zM5 17h3.325V7H5z"></svg:path>`,
})
export class MaterialSymbolsViewQuiltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
