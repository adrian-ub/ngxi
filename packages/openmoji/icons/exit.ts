import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiExitIcon],svg[openmoji-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M35.882 20.279h16.823v16.926H35.882z"></svg:path><svg:path fill="#9b9b9a" d="M40.854 21.275h10.85v10.85h-10.85z"></svg:path><svg:path fill="#9b9b9a" d="M35 37.979V18.104H15.125v39.75h39.75V38.012l-4.562-.007l-.282-.001z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M35 37.979V18.104H15.125v39.75h39.75V38.012l-4.562-.007l-.282-.001z"></svg:path><svg:path d="M40.854 21.275h10.85v10.85h-10.85z"></svg:path><svg:path d="m46.279 26.7l13.153-13.153l.558-.557V21M52 13h8"></svg:path></svg:g>`,
})
export class OpenmojiExitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
