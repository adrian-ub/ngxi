import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardTabIcon],svg[material-symbols-light-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17.5v-11h1v11zm-7.673-.212l-.713-.688l4.1-4.1H3v-1h12.694l-4.056-4.1l.689-.688L17.616 12z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
