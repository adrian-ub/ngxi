import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGemStoneIcon],svg[openmoji-gem-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiGemStone0" d="M56.377 11.98h-40L4 23.348l32 40.736l32-40.736z"></svg:path></svg:defs><svg:path fill="#61B2E4" d="M56.377 11.98h-40L4 23.348l32 40.736l32-40.736z"></svg:path><svg:path fill="#92D3F5" d="m37.37 62.336l18.379-38.988L36 11.98h20.377L68 23.348z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiGemStone0"></svg:use><svg:path d="M55.749 23.86L36 64.084V11.98L16.256 23.348m0 .512l19.748 40.224M4 23.348h64M36 11.98l19.749 11.368"></svg:path><svg:use href="#openmojiGemStone0"></svg:use></svg:g>`,
})
export class OpenmojiGemStoneIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
