import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardKeysIcon],svg[material-symbols-light-keyboard-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.23 16.77v-1.54h9.54v1.54zm-4-4v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm-16-4V7.23h1.54v1.54zm4 0V7.23h1.54v1.54zm4 0V7.23h1.54v1.54zm4 0V7.23h1.54v1.54zm4 0V7.23h1.54v1.54z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardKeysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
