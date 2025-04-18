import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiNightWithStarsIcon],svg[twemoji-night-with-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#269" d="M32 0H4a4 4 0 0 0-4 4v22h36V4a4 4 0 0 0-4-4"></svg:path><svg:path fill="#3F484C" d="M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9z"></svg:path><svg:path fill="#292F33" d="M28 19c0-1-1-1-1-1h-8c-1 0-1 1-1 1v17h10zm-17 2H6v-7s0-1-1-1H0v19a4 4 0 0 0 4 4h8V22s0-1-1-1m21 4c-1 0-1 1-1 1v10h1a4 4 0 0 0 4-4v-7z"></svg:path><svg:path fill="#FFCC4D" d="M8 31h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 3h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-18h2v2h-2zm0 4h2v2h-2z"></svg:path><svg:g fill="#FFF"><svg:circle cx="10.5" cy="2.5" r=".5"></svg:circle><svg:circle cx="7.5" cy="11.5" r=".5"></svg:circle><svg:circle cx="22" cy="5" r="1"></svg:circle><svg:circle cx="26.5" cy="5.5" r=".5"></svg:circle><svg:circle cx="31" cy="3" r="1"></svg:circle><svg:circle cx="31.5" cy="7.5" r=".5"></svg:circle><svg:path d="M6.5 7A2.5 2.5 0 0 1 4 4.5c0-1.13.755-2.074 1.784-2.383A3 3 0 0 0 5 2a3 3 0 1 0 0 6c.959 0 1.803-.458 2.353-1.159A2.5 2.5 0 0 1 6.5 7"></svg:path></svg:g>`,
})
export class TwemojiNightWithStarsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
