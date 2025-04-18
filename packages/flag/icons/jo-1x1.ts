import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagJo1x1Icon],svg[flag-jo-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagJo1x10"><svg:path fill-opacity=".7" d="M113.6 0H607v493.5H113.6z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagJo1x10)" transform="translate(-117.8)scale(1.0375)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#000001" d="M0 0h987v164.5H0z"></svg:path><svg:path fill="#fff" d="M0 164.5h987V329H0z"></svg:path><svg:path fill="#090" d="M0 329h987v164.5H0z"></svg:path><svg:path fill="red" d="m0 493.5l493.5-246.8L0 0z"></svg:path><svg:path fill="#fff" d="m164.8 244l22 10.6h-24.5l5.5 24l-15.3-19.3l-15.3 19.2l5.5-23.9H118l22.1-10.7l-15.3-19.1l22.1 10.6l5.5-23.9l5.5 24l22-10.7z"></svg:path></svg:g></svg:g>`,
})
export class FlagJo1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
