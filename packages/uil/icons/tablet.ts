import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTabletIcon],svg[uil-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-5.29-2.71a1 1 0 0 0-.91-.29l-.18.06a.8.8 0 0 0-.18.09l-.15.12a1 1 0 0 0-.21.33a1 1 0 0 0 .21 1.09a1.5 1.5 0 0 0 .33.22a1 1 0 0 0 1.09-.22A1 1 0 0 0 13 17a.84.84 0 0 0-.08-.38a1.2 1.2 0 0 0-.21-.33"></svg:path>`,
})
export class UilTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
