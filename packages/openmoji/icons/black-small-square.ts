import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackSmallSquareIcon],svg[openmoji-black-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23.009 23.051H48.99v25.981H23.009z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.009 23.051H48.99v25.981H23.009z"></svg:path>`,
})
export class OpenmojiBlackSmallSquareIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
