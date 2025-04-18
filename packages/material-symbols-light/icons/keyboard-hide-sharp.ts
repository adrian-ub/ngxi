import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardHideSharpIcon],svg[material-symbols-light-keyboard-hide-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.846L8.923 18.77h6.154zM3 16V4h18v12zm5.23-2.23h7.54v-1.54H8.23zm-3-3h1.54V9.23H5.23zm3 0h1.54V9.23H8.23zm3 0h1.54V9.23h-1.54zm3 0h1.54V9.23h-1.54zm3 0h1.54V9.23h-1.54zm-12-3h1.54V6.23H5.23zm3 0h1.54V6.23H8.23zm3 0h1.54V6.23h-1.54zm3 0h1.54V6.23h-1.54zm3 0h1.54V6.23h-1.54z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardHideSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
