import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUndIcon],svg[token-branded-und-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedUnd0)" d="M20.437 13.958V3c-3.859 0-4.82 3.133-4.82 4.697v5.867c0 4.697-5.896 5.872-8.843 5.872C9.024 20.685 11.465 21 12.399 21c6.43 0 8.038-4.697 8.038-7.042"></svg:path><svg:path fill="url(#tokenBrandedUnd1)" d="M20.438 3c-1.086.652-2.413 1.946-2.413 3.915v6.26c0 2.217-1.125 6.65-5.625 6.65c-2.571 0-4.388-.17-5.575-.366A12.9 12.9 0 0 0 12.394 21c6.435 0 8.044-4.697 8.044-7.042z"></svg:path><svg:path fill="url(#tokenBrandedUnd2)" d="M3.563 13.176V3l2.413.788v9c0 3.751 2.677 4.95 4.016 5.079c-.641.315-1.873.394-2.413.394c-3.212 0-4.016-3.392-4.016-5.085"></svg:path><svg:path fill="url(#tokenBrandedUnd3)" d="M8.383 6.915c0-2.193-1.609-3.003-2.407-3.133v9.394c0 3.91 2.407 4.691 3.61 4.691c1.447 0 2.684-.782 3.218-1.17c-3.538.625-4.42-2.087-4.42-3.52z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUnd0" x1="12.003" x2="12.003" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A41351"></svg:stop><svg:stop offset="1" stop-color="#E0196C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUnd1" x1="18.444" x2="16.269" y1="3.782" y2="20.774" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA1654"></svg:stop><svg:stop offset="1" stop-color="#E51970"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUnd2" x1="11.992" x2="11.992" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1631B6"></svg:stop><svg:stop offset="1" stop-color="#025DE1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUnd3" x1="9.39" x2="9.39" y1="3.782" y2="17.867" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#133BC1"></svg:stop><svg:stop offset="1" stop-color="#0264EB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
