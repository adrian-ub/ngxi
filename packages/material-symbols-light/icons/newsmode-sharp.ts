import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewsmodeSharpIcon],svg[material-symbols-light-newsmode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4h18v16zm3.77-3.77h10.46v-1H6.77zm0-3.73h3.384V7.77H6.769zm5.769 0h4.692v-1h-4.693zm0-3.73h4.692v-1h-4.693z"></svg:path>`,
})
export class MaterialSymbolsLightNewsmodeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
