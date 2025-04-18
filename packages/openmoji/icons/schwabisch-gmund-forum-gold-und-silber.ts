import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSchwabischGmundForumGoldUndSilberIcon],svg[openmoji-schwabisch-gmund-forum-gold-und-silber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="M20 40h35v11H20z"></svg:path><svg:path fill="#fcea2b" d="m46 18l13 4l-3 20l-5 5l-3-5z"></svg:path><svg:path fill="#fcea2b" d="m15 17l4 14l-1 16l30-5l-2-24Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 17l4 14l-1 16l30-5l-2-24Zm4 14l27-13m2 24L19 31m27-13l10 24m-2 9H20v-4"></svg:path><svg:path d="m46 18l13 4l-3 20l-5 5l-3-5zm0 0l10 24"></svg:path></svg:g>`,
})
export class OpenmojiSchwabischGmundForumGoldUndSilberIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
