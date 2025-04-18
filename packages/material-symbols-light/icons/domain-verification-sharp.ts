import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDomainVerificationSharpIcon],svg[material-symbols-light-domain-verification-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 15.82l4.958-4.959l-.72-.719l-4.238 4.239l-2.138-2.139l-.72.72zM4 8h16V6H4zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightDomainVerificationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
