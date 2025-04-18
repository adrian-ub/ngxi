import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTicketStarIcon],svg[zmdi-ticket-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 192q0 18 12.5 30.5T427 235v85q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320v-85q18 0 30.5-12.5T43 192t-12.5-30.5T0 149V64q0-18 12.5-30.5T43 21h341q18 0 30.5 12.5T427 64v85q-18 0-30.5 12.5T384 192m-94 102l-24-87l71-58l-91-5l-33-84l-33 84l-90 5l70 58l-23 87l76-49z"></svg:path>`,
})
export class ZmdiTicketStarIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
