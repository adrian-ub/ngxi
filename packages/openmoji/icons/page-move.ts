import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPageMoveIcon],svg[openmoji-page-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="m36 15.916l16 16.117v23.968H20V15.916z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m36 15.916l16 16.117v23.968H20V15.916z"></svg:path><svg:path d="m36 15.916l-.034 16.117h10.573m12.947-.986l5.216 5.216m-5.216 5.258l5.216-5.216m-52 5.216l-5.215-5.216m5.215-5.258l-5.215 5.216"></svg:path></svg:g>`,
})
export class OpenmojiPageMoveIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
