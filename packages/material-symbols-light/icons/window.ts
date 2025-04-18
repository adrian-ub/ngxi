import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWindowIcon],svg[material-symbols-light-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 12.5H20v5.885q0 .666-.475 1.14t-1.14.475H12.5zm0-1V4h5.885q.666 0 1.14.475T20 5.615V11.5zm-1 0H4V5.616q0-.667.475-1.141T5.615 4H11.5zm0 1V20H5.616q-.667 0-1.141-.475T4 18.386V12.5z"></svg:path>`,
})
export class MaterialSymbolsLightWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
