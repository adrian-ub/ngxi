import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisVerticalCircleIcon],svg[ion-ellipsis-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-234-90a26 26 0 1 1 26 26a26 26 0 0 1-26-26m0 90a26 26 0 1 1 26 26a26 26 0 0 1-26-26m0 90a26 26 0 1 1 26 26a26 26 0 0 1-26-26"></svg:path>`,
})
export class IonEllipsisVerticalCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
