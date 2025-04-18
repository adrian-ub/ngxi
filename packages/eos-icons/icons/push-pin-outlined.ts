import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPushPinOutlinedIcon],svg[eos-icons-push-pin-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.996 12.011A3.005 3.005 0 0 1 16 9V4h1l-.013.011A1.023 1.023 0 0 0 18 3a1.007 1.007 0 0 0-1.015-.988L17 2H7a1 1 0 0 0-.003 2H8l-.004 5A2.99 2.99 0 0 1 5 12v2h6v7l1 1l1-1v-7h6v-2ZM9 12a4.94 4.94 0 0 0 1-3V4h4v5a5 5 0 0 0 1 3Z"></svg:path>`,
})
export class EosIconsPushPinOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
