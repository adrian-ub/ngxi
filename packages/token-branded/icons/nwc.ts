import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNwcIcon],svg[token-branded-nwc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNwc0)" fill-rule="evenodd" d="M12 3L6.984 5.706l.503.931L12 4.204l4.513 2.435l.503-.932zM5.118 8.018l1.06-.618l-.532-.915l-1.587.924v9.338L10.941 21v-3.813l-3.954-2.47l-.562.899l3.457 2.158V19.1l-4.764-2.943zm13.764 0l-1.06-.618l.532-.915l1.587.924v9.338L13.059 21v-3.813l3.954-2.47l.562.899l-3.457 2.158V19.1l4.764-2.943zM12 5.57l5.016 2.705l-.503.932L12 6.774L7.487 9.208l-.503-.932l4.765-2.57zm-1.588 4.842h-.53v-1.06h.53v-.529h1.059v.53H12v-.53h1.058v.53a1.588 1.588 0 0 1 1.3 2.5a1.587 1.587 0 0 1-1.036 2.794h-.264v.53H12v-.53h-.53v.53h-1.058v-.53h-.53v-1.059h.53zm3.176.529a.53.53 0 0 1-.53.53h-1.587v-1.06h1.588a.53.53 0 0 1 .53.53m-2.117 2.647v-1.059h1.852a.528.528 0 1 1 0 1.059z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNwc0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#35B4E8"></svg:stop><svg:stop offset="1" stop-color="#3476BC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNwcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
