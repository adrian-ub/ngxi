import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWomanTippingHandIcon],svg[twemoji-woman-tipping-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFAC33" d="M14 0c-1.721 0-3.343.406-4.793 1.111A7 7 0 0 0 8 1a7 7 0 0 0-7 7v12h.018C1.201 26.467 6.489 31.656 13 31.656S24.799 26.467 24.982 20H25v-9c0-6.075-4.925-11-11-11"></svg:path><svg:path fill="#9268CA" d="M22 27H4a4 4 0 0 0-4 4v5h26v-5a4 4 0 0 0-4-4"></svg:path><svg:path fill="#7450A8" d="M21 32h1v4h-1zM4 32h1v4H4z"></svg:path><svg:path fill="#FFDC5D" d="M10 22v6a3 3 0 1 0 6 0v-6z"></svg:path><svg:path fill="#FFDC5D" d="M9 5s-.003 5.308-5 5.936V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-5.019C10.89 11.605 9 5 9 5"></svg:path><svg:path fill="#DF1F32" d="M17 22H9s1 2 4 2s4-2 4-2"></svg:path><svg:path fill="#9268CA" d="M29 36h-7l1-17h6z"></svg:path><svg:path fill="#F9CA55" d="M31.541 15.443a1.286 1.286 0 0 0-1.517-.997L27.35 15H25a2 2 0 0 0-2 2v2h5a1.996 1.996 0 0 0 1.992-1.927l.355-.073H31c0-.074-.028-.144-.045-.216c.444-.276.698-.799.586-1.341"></svg:path><svg:path fill="#FFDC5D" d="M36 16a1 1 0 0 0-1-1l-6 1h-5a1 1 0 0 0-1 1v2h6l6-2s1-.447 1-1"></svg:path><svg:path fill="#C1694F" d="M14 19.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1"></svg:path><svg:path fill="#662113" d="M9 16a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1"></svg:path>`,
})
export class TwemojiWomanTippingHandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
