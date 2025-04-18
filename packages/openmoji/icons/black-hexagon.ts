import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackHexagonIcon],svg[openmoji-black-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M35.034 8.261a1.95 1.95 0 0 1 1.952 0l22.559 13.025c.604.348.976.992.976 1.69v26.048a1.95 1.95 0 0 1-.976 1.69L36.986 63.739a1.95 1.95 0 0 1-1.952 0L12.476 50.714a1.95 1.95 0 0 1-.976-1.69V22.976c0-.697.372-1.342.976-1.69z"></svg:path><svg:path fill="#3F3F3F" d="M35.034 8.261a1.95 1.95 0 0 1 1.952 0l22.559 13.025c.604.348.976.992.976 1.69v26.048a1.95 1.95 0 0 1-.976 1.69L36.986 63.739a1.95 1.95 0 0 1-1.952 0L12.476 50.714a1.95 1.95 0 0 1-.976-1.69V22.976c0-.697.372-1.342.976-1.69z"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M35.034 8.261a1.95 1.95 0 0 1 1.952 0l22.559 13.025c.604.348.976.992.976 1.69v26.048a1.95 1.95 0 0 1-.976 1.69L36.986 63.739a1.95 1.95 0 0 1-1.952 0L12.476 50.714a1.95 1.95 0 0 1-.976-1.69V22.976c0-.697.372-1.342.976-1.69z"></svg:path>`,
})
export class OpenmojiBlackHexagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
