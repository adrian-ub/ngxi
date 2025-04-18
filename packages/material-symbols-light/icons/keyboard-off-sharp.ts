import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardOffSharpIcon],svg[material-symbols-light-keyboard-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 21.89L2.955 4.228l.713-.713l17.664 17.663zM8.23 15.77h7.695l-1.538-1.54H8.23zm-3-3h1.54v-1.54H5.23zm3 0h1.54v-1.54H8.23zm9 0h1.54v-1.54h-1.54zm-12-3h1.54V8.23H5.23zm9 0h1.54V8.23h-1.54zm3 0h1.54V8.23h-1.54zM3 18V6h3.156l12 12zm18 .025l-5.23-5.261V11.23h-1.56l-1.44-1.466V8.23h-1.552L9.006 6H21z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
