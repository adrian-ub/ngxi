import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedYdfIcon],svg[token-branded-ydf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedYdf0)" d="M11.998 8.63a1.687 1.687 0 1 0 0-3.373a1.687 1.687 0 0 0 0 3.374"></svg:path><svg:path fill="url(#tokenBrandedYdf1)" d="M11.997 8.069a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25"></svg:path><svg:path fill="url(#tokenBrandedYdf2)" d="m3.474 7.835l-.033.045a2.075 2.075 0 0 0 .517 3.014l4.346 2.946a2.41 2.41 0 0 0 3.222-.483l.033-.045a2.073 2.073 0 0 0-.517-3.014L6.696 7.352a2.41 2.41 0 0 0-3.222.483"></svg:path><svg:path fill="url(#tokenBrandedYdf3)" d="M15.27 21c-.253 0-.495-.067-.703-.185a1.3 1.3 0 0 1-.49-.506l-2.023-3.88a1.95 1.95 0 0 1 .017-1.844l4.604-8.422c-2.294 4.194-2.474 6.325-.9 9.339l1.39 2.653c.691 1.31-.338 2.845-1.895 2.845"></svg:path><svg:path fill="url(#tokenBrandedYdf4)" d="M20.993 8.393a.23.23 0 0 1-.123.202a.26.26 0 0 1-.253-.005l-.776-.523l-4.06 7.427c-1.574-3.013-1.405-5.144.894-9.339l.079-.135l-.664-.438a.22.22 0 0 1 .026-.254a.2.2 0 0 1 .07-.055l4.352-2.244a.25.25 0 0 1 .236 0c.079.045.22.113.22.197z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedYdf0" x1="12" x2="12" y1="3.002" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB508F"></svg:stop><svg:stop offset="1" stop-color="#FBAB1F"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYdf1" x1="11.999" x2="11.999" y1="3.002" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CE427F"></svg:stop><svg:stop offset="1" stop-color="#642F1E"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYdf2" x1="4.685" x2="20.898" y1="5.077" y2="15.621" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E1479A"></svg:stop><svg:stop offset="1" stop-color="#54459C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYdf3" x1="7.191" x2="9.043" y1="11.111" y2="20.995" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FCB415"></svg:stop><svg:stop offset="1" stop-color="#F3785F"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYdf4" x1="20.15" x2="14.809" y1="3.85" y2="15.376" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E0479A"></svg:stop><svg:stop offset="1" stop-color="#5A459C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedYdfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
