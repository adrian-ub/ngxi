import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSwap16Icon],svg[qlementine-icons-swap-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.85.854a.5.5 0 0 0-.707-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707-.707L3.7 3.997h7.79a2.5 2.5 0 0 1 2.5 2.5v2a.5.5 0 0 0 1 0v-2c0-1.93-1.57-3.5-3.5-3.5H3.7L5.85.847zM2 7.5a.5.5 0 0 0-1 0v2C1 11.43 2.57 13 4.5 13h7.79l-2.15 2.15a.5.5 0 0 0 .707.707l3-3a.5.5 0 0 0 0-.707l-3-3a.5.5 0 0 0-.707.707l2.15 2.15H4.5a2.5 2.5 0 0 1-2.5-2.5v-2z"></svg:path>`,
})
export class QlementineIconsSwap16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
