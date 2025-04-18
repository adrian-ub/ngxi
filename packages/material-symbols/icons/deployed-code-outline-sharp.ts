import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeployedCodeOutlineSharpIcon],svg[material-symbols-deployed-code-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zm-1-8.575l5.925-3.425L12 4L6.075 7.425zm-9 6.275V6.875L12 1.7l9 5.175v10.25L12 22.3zM12 12"></svg:path>`,
})
export class MaterialSymbolsDeployedCodeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
