import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPrinterIcon],svg[twemoji-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#67757F" d="M30 12H6V5c0-1.105.826-2 1.846-2h20.309C29.173 3 30 3.895 30 5zm0 19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3h24z"></svg:path><svg:path fill="#E1E8ED" d="M27 12H9V2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#5DADEC" d="M34 25c0 1-1 3-3 3H5c-2 0-3-2-3-3v-9a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#292F33" d="M30 25c0-1.104-.978-2-2.182-2H8.182C6.977 23 6 23.896 6 25v4h24z"></svg:path><svg:path fill="#4289C1" d="M30 15a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4h24z"></svg:path><svg:path fill="#E1E8ED" d="M27 34a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-8h18z"></svg:path><svg:path fill="#9AAAB4" d="M25 29a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1"></svg:path><svg:circle cx="30.5" cy="19.5" r="1.5" fill="#F5F8FA"></svg:circle><svg:path fill="#9AAAB4" d="M25 32a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1M9 25h18v2H9z"></svg:path>`,
})
export class TwemojiPrinterIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
