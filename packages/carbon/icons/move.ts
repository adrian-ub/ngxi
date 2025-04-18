import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMoveIcon],svg[carbon-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 11l-1.41 1.41L26.17 15H17V5.83l2.59 2.58L21 7l-5-5l-5 5l1.41 1.41L15 5.83V15H5.83l2.58-2.59L7 11l-5 5l5 5l1.41-1.41L5.83 17H15v9.17l-2.59-2.58L11 25l5 5l5-5l-1.41-1.41L17 26.17V17h9.17l-2.58 2.59L25 21l5-5z"></svg:path>`,
})
export class CarbonMoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
