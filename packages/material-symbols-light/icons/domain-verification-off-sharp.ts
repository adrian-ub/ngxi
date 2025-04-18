import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDomainVerificationOffSharpIcon],svg[material-symbols-light-domain-verification-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.104 22.53L17.573 19H3V5h2v1.427l-3.12-3.12l.714-.713l19.223 19.223zM4 18h12.573l-10-10H4zm16.852.04L20 17.19V8h-9.188l-3-3H21v12.385q0 .173-.04.343t-.108.313m-6.061-6.062l-.72-.72l1.118-1.117l.719.72zm-1.406 1.406l-2.435 2.434l-2.858-2.857l.72-.72l2.138 2.139l1.716-1.715z"></svg:path>`,
})
export class MaterialSymbolsLightDomainVerificationOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
