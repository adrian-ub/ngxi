import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabsSharpIcon],svg[material-symbols-labs-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.537-1.463T7 17V8H5V2h14v6h-2v9q0 2.075-1.463 3.538T12 22m0-2q1.25 0 2.125-.875T15 17h-3v-2h3v-2h-3v-2h3V8H9v9q0 1.25.875 2.125T12 20"></svg:path>`,
})
export class MaterialSymbolsLabsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
