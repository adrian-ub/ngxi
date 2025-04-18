import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiCustardIcon],svg[fluent-emoji-custard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f364id0)" d="M7.97 16.47L5.61 26h20.77l-2.3-9.52c-.2-.87-.98-1.48-1.87-1.48H9.84c-.88 0-1.66.61-1.87 1.47"></svg:path><svg:path fill="url(#f364id1)" d="M9.84 15c-.88 0-1.66.61-1.87 1.47L7.34 19H24.7l-.61-2.52c-.21-.87-.99-1.48-1.88-1.48z"></svg:path><svg:path fill="url(#f364id2)" d="M4 28c1.28 1.28 3.02 2 4.83 2h14.34c1.81 0 3.55-.72 4.83-2z"></svg:path><svg:path fill="url(#f364id3)" d="M4 28c1.28 1.28 3.02 2 4.83 2h14.34c1.81 0 3.55-.72 4.83-2z"></svg:path><svg:path fill="url(#f364id4)" d="M29 28H3c-.55 0-1-.45-1-1s.45-1 1-1h26c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="url(#f364id5)" d="M29 28H3c-.55 0-1-.45-1-1s.45-1 1-1h26c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="url(#f364id6)" d="M29 28H3c-.55 0-1-.45-1-1s.45-1 1-1h26c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path><svg:defs><svg:lineargradient id="f364id0" x1="5.61" x2="26.38" y1="26" y2="26" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#946B53"></svg:stop><svg:stop offset=".247" stop-color="#A66C3A"></svg:stop><svg:stop offset=".536" stop-color="#CC8B53"></svg:stop><svg:stop offset=".753" stop-color="#E0A56C"></svg:stop><svg:stop offset=".864" stop-color="#E6A567"></svg:stop><svg:stop offset="1" stop-color="#CC9968"></svg:stop></svg:lineargradient><svg:lineargradient id="f364id1" x1="7.813" x2="24.7" y1="17.313" y2="17.313" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#714C40"></svg:stop><svg:stop offset=".248" stop-color="#7A4A39"></svg:stop><svg:stop offset=".492" stop-color="#955F4B"></svg:stop><svg:stop offset=".785" stop-color="#B4806B"></svg:stop><svg:stop offset="1" stop-color="#AC7962"></svg:stop></svg:lineargradient><svg:lineargradient id="f364id2" x1="4.375" x2="28" y1="30" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AD99C1"></svg:stop><svg:stop offset="1" stop-color="#AD96C3"></svg:stop></svg:lineargradient><svg:lineargradient id="f364id3" x1="16.281" x2="16.25" y1="26.547" y2="28.469" gradientUnits="userSpaceOnUse"><svg:stop offset=".729" stop-color="#9883AC"></svg:stop><svg:stop offset="1" stop-color="#9C84B4" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f364id4" x1="2" x2="30.313" y1="27" y2="27" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#868589"></svg:stop><svg:stop offset=".514" stop-color="#ACAAAC"></svg:stop><svg:stop offset="1" stop-color="#BCB9C2"></svg:stop></svg:lineargradient><svg:radialgradient id="f364id5" cx="0" cy="0" r="1" gradientTransform="matrix(0 .78125 -14.5 0 26.188 26.719)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DDDAE4"></svg:stop><svg:stop offset="1" stop-color="#DEDBE4" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f364id6" cx="0" cy="0" r="1" gradientTransform="matrix(0 1.5625 -60.1813 0 11.188 28)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AF98C5"></svg:stop><svg:stop offset="1" stop-color="#AE98C5" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentEmojiCustardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
