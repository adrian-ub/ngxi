import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRainbowHexagonIcon],svg[openmoji-rainbow-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#B399C8" d="m33.745 63l-15.93-9.198h36.37L38.256 63z"></svg:path><svg:path fill="#92D3F5" d="m17.814 53.802l-5.348-3.088a1.95 1.95 0 0 1-.976-1.69V44.9h49.02v4.123a1.95 1.95 0 0 1-.976 1.69l-5.348 3.088z"></svg:path><svg:path fill="#B1CC33" d="M11.49 44.901V36h49.02v8.901z"></svg:path><svg:path fill="#FCEA2B" d="M11.49 36v-8.901h49.02V36z"></svg:path><svg:path fill="#F4AA41" d="M11.49 27.099v-4.123c0-.697.371-1.342.976-1.69l5.348-3.088h36.372l5.348 3.088c.605.348.976.992.976 1.69V27.1z"></svg:path><svg:path fill="#EA5A47" d="M17.814 18.198L33.744 9h4.511l15.93 9.198z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-width="2" d="M35.024 8.261a1.95 1.95 0 0 1 1.952 0l22.558 13.025c.605.348.976.992.976 1.69v26.048a1.95 1.95 0 0 1-.976 1.69L36.976 63.739a1.95 1.95 0 0 1-1.952 0L12.465 50.714a1.95 1.95 0 0 1-.975-1.69V22.976c0-.697.371-1.342.976-1.69z"></svg:path>`,
})
export class OpenmojiRainbowHexagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
