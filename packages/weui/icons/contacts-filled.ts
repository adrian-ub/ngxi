import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiContactsFilledIcon],svg[weui-contacts-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C7.096 11.478 6.5 9.85 6.5 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m19-5.5h3V16h-3zm-2-3h5V13h-5zm-2-3h7V10h-7z"></svg:path>`,
})
export class WeuiContactsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
