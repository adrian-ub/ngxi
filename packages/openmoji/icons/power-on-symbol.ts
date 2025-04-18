import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPowerOnSymbolIcon],svg[openmoji-power-on-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M36 16v40"></svg:path>`,
})
export class OpenmojiPowerOnSymbolIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
