import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteHexagonIcon],svg[openmoji-white-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M35 7.577a2 2 0 0 1 2 0l23.115 13.346c.619.357 1 1.017 1 1.732v26.69c0 .715-.381 1.375-1 1.732L37 64.423a2 2 0 0 1-2 0L11.885 51.077a2 2 0 0 1-1-1.732v-26.69c0-.715.381-1.375 1-1.732z"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M35 7.577a2 2 0 0 1 2 0l23.115 13.346c.619.357 1 1.017 1 1.732v26.69c0 .715-.381 1.375-1 1.732L37 64.423a2 2 0 0 1-2 0L11.885 51.077a2 2 0 0 1-1-1.732v-26.69c0-.715.381-1.375 1-1.732z"></svg:path>`,
})
export class OpenmojiWhiteHexagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
