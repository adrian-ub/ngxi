import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilModemIcon],svg[uil-modem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.48 13.13a.7.7 0 0 0-.05-.2a1 1 0 0 0-.08-.17a1 1 0 0 0-.1-.16l-.16-.13l-.09-.09l-14.72-8.5a1 1 0 0 0-1 1.74l11.49 6.63H3.5a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-4s-.02-.08-.02-.12m-2 4.12a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1v-3h15Zm-3 0a1 1 0 1 0-1-1a1 1 0 0 0 1.02 1Z"></svg:path>`,
})
export class UilModemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
