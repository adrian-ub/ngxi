import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardCapslockIcon],svg[material-symbols-light-keyboard-capslock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17.5v-1h11v1zM12 6.292l5.308 5.308l-.708.708l-4.6-4.6l-4.6 4.6l-.708-.708z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardCapslockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
