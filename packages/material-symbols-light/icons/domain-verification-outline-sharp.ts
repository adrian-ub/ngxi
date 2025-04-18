import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDomainVerificationOutlineSharpIcon],svg[material-symbols-light-domain-verification-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V8H4zm6.95-2.18l-2.858-2.858l.72-.72l2.138 2.139l4.239-4.239l.719.72zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightDomainVerificationOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
