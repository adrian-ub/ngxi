import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiConfirmationNumberIcon],svg[zmdi-confirmation-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 149q-18 0-30.5 12.5T384 192t12.5 30.5T427 235v85q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320v-85q18 0 30.5-12.5T43 192t-12.5-30.5T0 149V64q0-18 12.5-30.5T43 21h341q18 0 30.5 12.5T427 64zM235 309v-42h-43v42zm0-96v-42h-43v42zm0-96V75h-43v42z"></svg:path>`,
})
export class ZmdiConfirmationNumberIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
