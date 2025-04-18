import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWarning48Icon],svg[fluent-color-warning-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#212121" d="M20.471 6.228c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272z"></svg:path><svg:path fill="url(#fluentColorWarning480)" d="M20.471 6.228c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272z"></svg:path><svg:path fill="url(#fluentColorWarning481)" d="M24 15c.69 0 1.25.56 1.25 1.25v11.5a1.25 1.25 0 1 1-2.5 0v-11.5c0-.69.56-1.25 1.25-1.25m0 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorWarning480" x1="10.25" x2="34.452" y1="-1.938" y2="46.585" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWarning481" x1="18.667" x2="28.274" y1="15" y2="35.496" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#242424"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWarning48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
