import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHouseIcon],svg[openmoji-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M19 32h34v24H19z"></svg:path><svg:path fill="#A57939" d="M25 40h9v16h-9z"></svg:path><svg:path fill="#92D3F5" d="M40 40h8v7h-8z"></svg:path><svg:path fill="#EA5A47" d="M53 32H19v-1l16-16l18 16z"></svg:path><svg:path fill="#EA5A47" d="m29 21l-5 5v-9h5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M25 40h9v16h-9zm15 0h8v7h-8zm13-8H19v-1l16-16l18 16z"></svg:path><svg:path d="M19 32h34v24H19zm10-11l-5 5v-9h5z"></svg:path></svg:g>`,
})
export class OpenmojiHouseIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
