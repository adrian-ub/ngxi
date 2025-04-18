import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionStopSharpIcon],svg[ion-stop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 80h352v352H80z"></svg:path>`,
})
export class IonStopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
