import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTurningSignIcon],svg[zmdi-turning-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 201q7 6 7 15t-7 15L228 423q-6 6-15 6t-15-6L6 231q-6-6-6-15t6-15L198 9q6-6 15-6t15 6zm-164 68l75-74l-75-75v53H149q-9 0-15 6.5t-6 15.5v85h43v-64h85z"></svg:path>`,
})
export class ZmdiTurningSignIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
