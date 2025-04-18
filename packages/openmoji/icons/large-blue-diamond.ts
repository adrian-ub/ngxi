import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLargeBlueDiamondIcon],svg[openmoji-large-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="m12.065 35.5l24.218-24.218L60.5 35.5L36.283 59.718z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.065 35.5l24.218-24.218L60.5 35.5L36.283 59.718z"></svg:path>`,
})
export class OpenmojiLargeBlueDiamondIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
