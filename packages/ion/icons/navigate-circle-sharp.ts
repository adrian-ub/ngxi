import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionNavigateCircleSharpIcon],svg[ion-navigate-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208m-8 361V264H103l259-114.11Z"></svg:path>`,
})
export class IonNavigateCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
