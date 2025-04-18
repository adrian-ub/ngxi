import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseHereButtonIcon],svg[openmoji-japanese-here-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48.984" height="48.984" x="11.805" y="11.602" fill="#d0cfce" rx="1.699"></svg:rect><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-miterlimit="5" d="M17.368 26.219h16.53a.43.43 0 0 1 .43.43v22.296m-.001-2.662H17.368m20.107-20.064h16.53a.43.43 0 0 1 .43.43v22.296m-.001-2.662H37.475"></svg:path><svg:rect width="48.984" height="48.984" x="11.805" y="11.602" stroke-miterlimit="10" rx="1.699"></svg:rect></svg:g>`,
})
export class OpenmojiJapaneseHereButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
