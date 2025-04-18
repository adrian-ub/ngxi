import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCaretDownCircleSharpIcon],svg[ion-caret-down-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-99.73-44L256 342.09L147.73 212Z"></svg:path>`,
})
export class IonCaretDownCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
