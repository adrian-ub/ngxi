import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSchwbischGmndForumGoldUndSilberIcon],svg[openmoji-schwbisch-gmnd-forum-gold-und-silber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="M20 40h35v11H20z"></svg:path><svg:path fill="#fcea2b" d="M46 18l13 4l-3 20l-5 5l-3-5l-2-24z"></svg:path><svg:path fill="#fcea2b" d="M15 17l4 14l-1 16l30-5l-2-24z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 17l4 14l-1 16l30-5l-2-24z"></svg:path><svg:path d="M19 31l27-13"></svg:path><svg:path d="M48 42L19 31"></svg:path><svg:path d="M46 18l10 24"></svg:path><svg:path d="M54 51H20v-4"></svg:path><svg:path d="M46 18l13 4l-3 20l-5 5l-3-5l-2-24z"></svg:path><svg:path d="M46 18l10 24"></svg:path></svg:g>`,
})
export class OpenmojiSchwbischGmndForumGoldUndSilberIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
