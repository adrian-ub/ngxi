import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBalanceIcon],svg[zmdi-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 197h64v150H43zm128 0h64v150h-64zM0 453v-64h405v64zm299-256h64v150h-64zM203 5l202 107v43H0v-43z"></svg:path>`,
})
export class ZmdiBalanceIcon {
  readonly viewBox = input("0 0 408 456")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
