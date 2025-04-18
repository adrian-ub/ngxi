import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSynagogueIcon],svg[openmoji-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiSynagogue0" d="m35 47l8.66-15H26.34z"></svg:path></svg:defs><svg:g stroke-miterlimit="10" stroke-width="2"><svg:path fill="#F4AA41" d="M52 33.78V60H18V33.78a1 1 0 0 1 .408-.805L34.38 21.23a.946.946 0 0 1 1.238 0l15.973 11.744a1 1 0 0 1 .408.806M8 39h10v21H8zm44 0h10v21H52z"></svg:path><svg:path fill="#A57939" d="M39 60h-8v-6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3z"></svg:path><svg:path fill="#3F3F3F" d="m57 30l-5 9h10zm-44 0l-5 9h10z"></svg:path><svg:path fill="#FFF" d="m35 27l-8.66 15h17.32z"></svg:path><svg:path fill="#D0CFCE" d="m35 47l8.66-15H26.34z"></svg:path><svg:path fill="#D0CFCE" d="m35 27l-8.66 15h17.32z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M52 33.78V60H18V33.78a1 1 0 0 1 .408-.805L34.38 21.23a.946.946 0 0 1 1.238 0l15.973 11.744a1 1 0 0 1 .408.806z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 39h10v21H8zm44 0h10v21H52zM39 60h-8v-6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 47h-2v-3a1 1 0 0 1 1-1h0m45 4h-2v-3a1 1 0 0 1 1-1h0M35 60v-9m22-21l-5 9h10zm-44 0l-5 9h10zm22-3l-8.66 15h17.32z"></svg:path><svg:use href="#openmojiSynagogue0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path stroke-linecap="round" stroke-linejoin="round" d="m35 27l-8.66 15h17.32z"></svg:path><svg:use href="#openmojiSynagogue0" stroke-linecap="round" stroke-linejoin="round"></svg:use></svg:g>`,
})
export class OpenmojiSynagogueIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
