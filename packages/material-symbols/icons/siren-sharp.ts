import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSirenSharpIcon],svg[material-symbols-siren-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13h2v-3q0-.825.588-1.412T12 8V6q-1.65 0-2.825 1.175T8 10zm-6 8v-6h3v-5q0-2.925 2.038-4.962T12 3t4.963 2.038T19 10v5h3v6z"></svg:path>`,
})
export class MaterialSymbolsSirenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
