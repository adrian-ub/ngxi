import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteFlagIcon],svg[openmoji-white-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiWhiteFlag0" d="M23.084 17.488C25.97 15.69 31.506 13.255 37.5 16c3.689 1.69 5.634 4.698 15.04 4.114c.79-.049 1.46.597 1.46 1.41V36.65c0 .623-.423 1.077-.965 1.354C51.088 39 45.764 38.94 37.5 35c-3.365-1.604-8.57-2.568-14.458 1.443"></svg:path></svg:defs><svg:g fill="#FFF"><svg:path d="M22.303 17.488c2.957-1.798 8.634-4.233 14.78-1.488c3.782 1.69 5.777 4.698 15.42 4.114A1.414 1.414 0 0 1 54 21.524V36.65c0 .623-.434 1.077-.99 1.354c-1.995.996-7.454.935-15.927-3.004c-3.45-1.604-8.787-2.568-14.824 1.443"></svg:path><svg:use href="#openmojiWhiteFlag0"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiWhiteFlag0" stroke-linejoin="round"></svg:use><svg:path d="M19.327 12.875v46.96"></svg:path></svg:g>`,
})
export class OpenmojiWhiteFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
