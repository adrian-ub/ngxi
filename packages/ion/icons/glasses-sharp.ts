import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionGlassesSharpIcon],svg[ion-glasses-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 176H16v64h21.24l12.44 112h171.87L240 241.32V240a16 16 0 0 1 32 0v1.32L290.45 352h171.87l12.44-112H496Z"></svg:path>`,
})
export class IonGlassesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
