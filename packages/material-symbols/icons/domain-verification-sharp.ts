import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDomainVerificationSharpIcon],svg[material-symbols-domain-verification-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 16.55l5.65-5.65l-1.45-1.45l-4.2 4.2l-2.1-2.1L7.4 13zM4 8h16V6H4zM2 20V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsDomainVerificationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
