import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCardTravelIcon],svg[zmdi-card-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 88q18 0 30.5 12.5T427 131v234q0 18-12.5 30.5T384 408H43q-18 0-30.5-12.5T0 365V131q0-18 12.5-30.5T43 88h64V45q0-17 12.5-29.5T149 3h128q18 0 30.5 12.5T320 45v43zM149 45v43h128V45zm235 320v-42H43v42zm0-106V131h-64v42h-43v-42H149v42h-42v-42H43v128z"></svg:path>`,
})
export class ZmdiCardTravelIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
