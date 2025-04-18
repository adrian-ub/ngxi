import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCricketGameIcon],svg[twemoji-cricket-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D99E82" d="M35.538 26.679s1.328 2.214-2.658 6.201c-3.987 3.986-6.201 2.658-6.201 2.658L7.185 16.046s.977-2.748 3.544-5.316s5.316-3.544 5.316-3.544z"></svg:path><svg:path fill="#C1694F" d="M13.388 9.844c.979.979 4.522 6.109 3.544 7.088c-.979.978-6.109-2.565-7.088-3.544l-8.86-8.86A2.507 2.507 0 0 1 4.528.984z"></svg:path><svg:path fill="#292F33" d="M.983 4.528L4.528.984L9.844 6.3L6.3 9.844z"></svg:path><svg:circle cx="19" cy="31" r="5" fill="#BE1931"></svg:circle><svg:path fill="#662113" d="M19 36a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path>`,
})
export class TwemojiCricketGameIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
