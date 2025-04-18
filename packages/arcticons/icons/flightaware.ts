import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlightawareIcon],svg[arcticons-flightaware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.635 32.5l3.275-2.155m1.823-.995l3.606-1.658m1.824-.622l3.855-1.326m14.271-2.484l-2.943 10.274l-.934-9.962l-3.17-9.106l3.572 4.133l2.971 3.19m-9.967 3.176L21.73 20.89l3.805 3.711l-1.899 5.118z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.841 22.243l1.524-1.143l-2.052-.763l-17.967 4.778z"></svg:path>`,
})
export class ArcticonsFlightawareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
