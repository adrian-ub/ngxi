import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardTabRtlIcon],svg[material-symbols-light-keyboard-tab-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.5H3v-11h1zm7.673-.212L6.385 12l5.288-5.288l.688.688l-4.055 4.1H21v1H8.287l4.1 4.1z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardTabRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
