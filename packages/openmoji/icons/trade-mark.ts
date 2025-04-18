import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTradeMarkIcon],svg[openmoji-trade-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6.735" d="M57.68 47.79V24.22l-10.1 20.2l-10.1-20.2v23.57M14.32 24.21h13.47m-6.74 0v23.57" clip-rule="evenodd"></svg:path>`,
})
export class OpenmojiTradeMarkIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
