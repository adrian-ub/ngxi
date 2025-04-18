import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRipplesOutlineSharpIcon],svg[material-symbols-ripples-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-8.55q-.45.275-.962.413T17 11q-1.65 0-2.825-1.175T13 7q0-.525.138-1.038T13.55 5H5zm-2 2V3h18v18zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsRipplesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
