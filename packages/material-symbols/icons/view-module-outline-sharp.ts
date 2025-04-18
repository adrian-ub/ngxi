import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewModuleOutlineSharpIcon],svg[material-symbols-view-module-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.675 11H19V7h-3.325zm-5.35 0h3.325V7h-3.325zM5 11h3.325V7H5zm0 6h3.325v-4H5zm5.325 0h3.325v-4h-3.325zm5.35 0H19v-4h-3.325zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsViewModuleOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
