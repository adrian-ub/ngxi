import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRMobiledataSharpIcon],svg[material-symbols-r-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10V2h7v5.2H7.8L9 10H7L5.85 7.35H4V10zm2-4.65h3V4H4z"></svg:path>`,
})
export class MaterialSymbolsRMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
