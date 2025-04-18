import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPs1x1Icon],svg[flag-ps-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPs1x10"><svg:path fill-opacity=".7" d="M237.1 0h493.5v493.5H237.1z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagPs1x10)" transform="translate(-246)scale(1.0375)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#000001" d="M0 0h987v164.5H0z"></svg:path><svg:path fill="#fff" d="M0 164.5h987V329H0z"></svg:path><svg:path fill="#090" d="M0 329h987v164.5H0z"></svg:path><svg:path fill="red" d="m0 493.5l493.5-246.8L0 0z"></svg:path></svg:g></svg:g>`,
})
export class FlagPs1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
