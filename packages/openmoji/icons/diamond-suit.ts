import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDiamondSuitIcon],svg[openmoji-diamond-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M55 36L36 63L17 36L36 9z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 36l19 27m0 0l19-27m-38 0L36 9m0 0l19 27"></svg:path>`,
})
export class OpenmojiDiamondSuitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
