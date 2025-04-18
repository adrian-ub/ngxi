import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMahjongRedDragonIcon],svg[openmoji-mahjong-red-dragon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M17 8h38v56H17z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 8h38v56H17zm19 8v40"></svg:path><svg:path d="M24 24h24v12H24z"></svg:path></svg:g><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 16v40M24 24h24v12H24z"></svg:path>`,
})
export class OpenmojiMahjongRedDragonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
