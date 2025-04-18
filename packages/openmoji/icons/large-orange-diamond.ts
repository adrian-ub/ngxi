import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLargeOrangeDiamondIcon],svg[openmoji-large-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" d="m36 10.984l24.974 24.974L36 60.932L11.026 35.958z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36 10.984l24.974 24.974L36 60.932L11.026 35.958z"></svg:path>`,
})
export class OpenmojiLargeOrangeDiamondIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
