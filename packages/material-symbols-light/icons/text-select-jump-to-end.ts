import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectJumpToEndIcon],svg[material-symbols-light-text-select-jump-to-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1.23h1.23V20zM4 5.23V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm3.692 0v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM19 20V4h1v16zm-8.442-4.712L9.85 14.6l2.075-2.1H4v-1h7.925L9.85 9.4l.708-.688L13.846 12zm.827-10.057V4h1.23v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectJumpToEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
