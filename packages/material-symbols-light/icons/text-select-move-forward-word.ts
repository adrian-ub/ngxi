import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectMoveForwardWordIcon],svg[material-symbols-light-text-select-move-forward-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.712 15.289l-.708-.689l2.075-2.1H11v-1h7.079l-2.075-2.1l.707-.688L20 12zM4 20V4h4.923v16zm7.385 0v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM18.769 20v-1.23H20V20zm0-14.77V4H20v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectMoveForwardWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
