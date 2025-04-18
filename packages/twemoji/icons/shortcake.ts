import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiShortcakeIcon],svg[twemoji-shortcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="18" cy="25" fill="#939598" rx="18" ry="10"></svg:ellipse><svg:ellipse cx="18" cy="23" fill="#F1F2F2" rx="18" ry="10"></svg:ellipse><svg:ellipse cx="18" cy="22.611" fill="#FFF" rx="14.8" ry="7.611"></svg:ellipse><svg:path fill="#E1E8ED" d="M8 28c0-3.044.417-7.208.042-13.875c.601-1.377 6.146-2.472 6.625-3.792C15.954 6.787 13.458 4.417 16 2c2.05-1.949 5-2 6 1c2-2 6-1 6 2c4-1 6 3 3 6c0 1-1 9-1 11s-.208 1.792-5.208 2.792S8 28 8 28"></svg:path><svg:path fill="#FFAC33" d="M8 27V15s21-7 21-2.458V23z"></svg:path><svg:path fill="#FFD983" d="M8 26V16s12.375-4.208 20-4v10z"></svg:path><svg:path fill="#FFAC33" d="M8 21v-1l21-4v1z"></svg:path><svg:path fill="#E1E8ED" d="m8 14l9-9c2 0 8 1 11 5z"></svg:path><svg:path fill="#FFF" d="M30 10c1-1 1-5-3-4c0-1-2-4-5-2c0-1-5-2-6 0c10 3 14 6 14 6"></svg:path><svg:path fill="#DD2E44" d="M17.958 10.458c-1.833-.208-4.417-1.083-3.917-3.5s2.474-4.881 3.75-5.542C18.917.833 20.117 1.26 21 4.667c.583 2.25 2.75 5.125-1.667 5.75c-.458 0-1.375.041-1.375.041"></svg:path><svg:path fill="#F4ABBA" d="M18.375 5.042a.5.5 0 0 1-.4-.2l-.5-.667a.5.5 0 1 1 .8-.6l.5.667a.5.5 0 0 1-.4.8m-2.416 3.5a.5.5 0 0 1-.484-.626l.25-.958a.5.5 0 0 1 .967.253l-.25.958a.5.5 0 0 1-.483.373m4.374.083a.5.5 0 0 1-.261-.073l-.75-.458a.501.501 0 0 1 .522-.854l.75.458a.501.501 0 0 1-.261.927"></svg:path>`,
})
export class TwemojiShortcakeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
