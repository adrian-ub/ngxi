import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownLeftBoxOutlineIcon],svg[ion-arrow-down-left-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M123.636 269.236V90.546A42.545 42.545 0 0 1 166.182 48h255.273A42.546 42.546 0 0 1 464 90.545v255.273a42.54 42.54 0 0 1-42.545 42.546H242.764M48 331.636V464h132.364M296 216L48 464"></svg:path>`,
})
export class IonArrowDownLeftBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
