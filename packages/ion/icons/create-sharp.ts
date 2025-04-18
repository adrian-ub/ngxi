import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCreateSharpIcon],svg[ion-create-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464.37 49.2a22.07 22.07 0 0 0-31.88-.76l-18.31 18.25l31.18 31.1l18-17.91a22.16 22.16 0 0 0 1.01-30.68M252.76 336H176v-76.76l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6zM400 143.16l32.79-32.86l-31.09-31.09L368.85 112H400z"></svg:path><svg:path fill="currentColor" d="M208 304h31.49L400 143.16V112h-31.15L208 272.51z"></svg:path>`,
})
export class IonCreateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
