import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedArswIcon],svg[token-branded-arsw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedArsw0)" d="M3.871 18.898L4.742 21C6.368 15.716 9.968 8.998 12 5.7c2.032 3.298 6.097 10.498 7.258 15.3l.871-2.102C19.664 16.5 15.193 6.298 12 3C9.097 6.298 5.032 15.501 3.871 18.898M12 12c-1.394 2.16-3.292 6.898-4.065 9l-.87-2.398c.58-2.102 3.484-7.804 4.935-9.9c1.742 2.096 4.645 8.1 4.936 9.9l-.872 2.096c-.58-1.8-2.612-6.3-4.064-8.698m-.871 8.402L12 19.2l.871 1.202l.87-1.202c0-.9-1.16-3.002-1.741-3.6c-.58.598-1.742 2.88-1.742 3.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedArsw0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00EBE4"></svg:stop><svg:stop offset="1" stop-color="#009EF8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedArswIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
