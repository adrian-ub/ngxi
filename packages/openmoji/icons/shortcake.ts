import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShortcakeIcon],svg[openmoji-shortcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m57.537 18.051l-16.54 2.51l-2.075.432L7 26a2 2 0 0 0-2 2v12h1c2.762 0 5-2.238 5-4.999a5 5 0 1 1 10 0C21 37.763 23.238 40 26 40s5-2.238 5-4.999a5 5 0 1 1 10 0C41 37.763 43.238 40 46 40s5-2.238 5-4.999a5 5 0 1 1 10 0A5 5 0 0 0 66 40h1V28c0-4.711-3.26-8.663-7.647-9.721c-.434-.105-1.362-.182-1.816-.228"></svg:path><svg:circle cx="49.5" cy="18" r="5" fill="#ea5a47"></svg:circle><svg:path fill="#fcea2b" d="M67 39v20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V39"></svg:path><svg:path fill="#fcea2b" d="M67 40h-1a5 5 0 0 1-5-5a5 5 0 0 0-10 0a5 5 0 0 1-10 0a5 5 0 0 0-10 0a5 5 0 0 1-10 0a5 5 0 0 0-10 0a5 5 0 0 1-5 5H5"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M67 28v31a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V28a2 2 0 0 1 2-2l33.996-5.438m17.023-2.511C63.063 18.561 67 22.822 67 28"></svg:path><svg:path d="M5 40h1c2.762 0 5-2.238 5-4.999a5 5 0 1 1 10 0C21 37.763 23.238 40 26 40s5-2.238 5-4.999a5 5 0 1 1 10 0C41 37.763 43.238 40 46 40s5-2.238 5-4.999a5 5 0 1 1 10 0A5 5 0 0 0 66 40h1M5 48h62M5 52h62"></svg:path><svg:circle cx="49.5" cy="18" r="5"></svg:circle><svg:path d="M49.5 16c0-5.523 4.477-10 10-10"></svg:path></svg:g>`,
})
export class OpenmojiShortcakeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
