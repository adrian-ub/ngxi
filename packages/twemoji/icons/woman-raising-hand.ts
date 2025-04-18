import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWomanRaisingHandIcon],svg[twemoji-woman-raising-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFAC33" d="M19 0c-1.721 0-3.343.406-4.793 1.111A7 7 0 0 0 13 1a7 7 0 0 0-7 7v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11"></svg:path><svg:path fill="#FFDC5D" d="M9 5v12c0 4.971 4.029 9 9 9s9-4.029 9-9V5z"></svg:path><svg:path fill="#FFAC33" d="M26.999 5V4H8v7c6 0 6-6 6-6s2 7 14 7V5z"></svg:path><svg:path fill="#FFDC5D" d="M12.421 2.935a1.283 1.283 0 0 0-1.776.367L10 4.284V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8s0 1 1 1h6l1-1V8.957l2.789-4.246a1.28 1.28 0 0 0-.368-1.776"></svg:path><svg:path fill="#EF9645" d="M4 0h1v5H4zm3 0h1v5H7z"></svg:path><svg:path fill="#9268CA" d="M27 27H9l1-17H2v17s0 9 8 9h21v-5a4 4 0 0 0-4-4"></svg:path><svg:path fill="#C1694F" d="M19 19.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1"></svg:path><svg:path fill="#662113" d="M14 16a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1"></svg:path><svg:path fill="#FFDC5D" d="M15 22v6a3 3 0 1 0 6 0v-6z"></svg:path><svg:path fill="#DF1F32" d="M22 22h-8s1 2 4 2s4-2 4-2"></svg:path><svg:path fill="#7450A8" d="M26 32h1v4h-1z"></svg:path>`,
})
export class TwemojiWomanRaisingHandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
