import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmallBlueDiamondIcon],svg[openmoji-small-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="m16 36l19.5-19.5L55 36L35.5 55.5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 36l19.5-19.5L55 36L35.5 55.5z"></svg:path>`,
})
export class OpenmojiSmallBlueDiamondIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
