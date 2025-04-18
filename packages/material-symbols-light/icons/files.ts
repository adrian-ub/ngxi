import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilesIcon],svg[material-symbols-light-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.667 0-1.141-.475T3 17.386V14.23h7.616q.666 0 1.14-.475t.475-1.14V5h7.154q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475zM3 13.942V8.616q0-.667.475-1.141T4.615 7h5.327zm2.114-.711l6.117-6.117v5.502q0 .269-.173.442t-.442.173z"></svg:path>`,
})
export class MaterialSymbolsLightFilesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
