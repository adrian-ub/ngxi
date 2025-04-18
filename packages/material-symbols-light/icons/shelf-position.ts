import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShelfPositionIcon],svg[material-symbols-light-shelf-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.667 0-1.141-.475T4 18.386V15.5h16v2.885q0 .666-.475 1.14t-1.14.475zm10.5-5.5V4h2.269q.666 0 1.14.475T20 5.615V14.5zM4 14.5V5.616q0-.667.475-1.141T5.615 4h2.27v10.5zm4.885 0V4h6.23v10.5z"></svg:path>`,
})
export class MaterialSymbolsLightShelfPositionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
