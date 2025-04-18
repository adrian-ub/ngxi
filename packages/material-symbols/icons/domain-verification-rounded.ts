import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDomainVerificationRoundedIcon],svg[material-symbols-domain-verification-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 13.65l-1.375-1.375q-.3-.3-.725-.3t-.725.3t-.3.725t.3.725l2.125 2.125q.3.3.7.3t.7-.3l4.225-4.225q.3-.3.3-.725t-.3-.725t-.725-.3t-.725.3zM4 8h16V6H4zm0 12q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsDomainVerificationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
