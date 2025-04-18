import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisHorizontalCircleIcon],svg[ion-ellipsis-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m-90 234a26 26 0 1 1 26-26a26 26 0 0 1-26 26m90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26m90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class IonEllipsisHorizontalCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
