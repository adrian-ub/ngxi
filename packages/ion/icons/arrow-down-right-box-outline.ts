import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownRightBoxOutlineIcon],svg[ion-arrow-down-right-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M269.236 388.364H90.546A42.546 42.546 0 0 1 48 345.818V90.545A42.545 42.545 0 0 1 90.545 48h255.273a42.543 42.543 0 0 1 42.546 42.546v178.69M331.636 464H464V331.636M216 216l248 248"></svg:path>`,
})
export class IonArrowDownRightBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
