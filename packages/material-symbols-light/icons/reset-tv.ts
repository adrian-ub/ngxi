import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResetTvIcon],svg[material-symbols-light-reset-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-2H4.616q-.667 0-1.141-.475T3 16.386V5.615q0-.666.475-1.14T4.615 4h14.77q.666 0 1.14.475T21 5.615V10.5h-9.392l2.35-2.35l-.708-.708L9.692 11l3.558 3.558l.708-.708l-2.35-2.35H21v4.885q0 .666-.475 1.14t-1.14.475H15v2z"></svg:path>`,
})
export class MaterialSymbolsLightResetTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
