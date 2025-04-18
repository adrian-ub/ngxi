import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardCapslockBadgeSharpIcon],svg[material-symbols-light-keyboard-capslock-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.712 16h8.577v-1H7.711zm.688-3.02L12 9.4l3.6 3.58l.689-.688L12 7.985l-4.288 4.307zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardCapslockBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
