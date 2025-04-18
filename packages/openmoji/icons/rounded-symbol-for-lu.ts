import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRoundedSymbolForLuIcon],svg[openmoji-rounded-symbol-for-lu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M13.2 33a23 23 0 0 1 45.6 0H39V18.2A18 18 0 0 1 52.1 28H45m-31.8 5H33V18.2A18 18 0 0 0 19.9 28H27M13.2 39a23 23 0 0 0 45.6 0H39v14.8A18 18 0 0 0 52.1 44H45m-31.8-5H33v14.8A18 18 0 0 1 19.9 44H27m-7.2-24.2L23 23m29.2 29.2L49 49m-29.2 3.2L23 49m29.2-29.2L49 23M18.1 39a18 18 0 0 1 0-6m35.8 6a18 18 0 0 0 0-6"></svg:path></svg:g>`,
})
export class OpenmojiRoundedSymbolForLuIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
