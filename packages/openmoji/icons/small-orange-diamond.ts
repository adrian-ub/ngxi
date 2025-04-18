import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmallOrangeDiamondIcon],svg[openmoji-small-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e27022" d="m17 36l19.5-19.5L56 36L36.5 55.5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 36l19.5-19.5L56 36L36.5 55.5z"></svg:path>`,
})
export class OpenmojiSmallOrangeDiamondIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
