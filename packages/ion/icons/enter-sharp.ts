import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionEnterSharpIcon],svg[ion-enter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 240h147.37l-64-64L266 153.37L368.63 256L266 358.63L243.37 336l64-64H160v148a12 12 0 0 0 12 12h296a12 12 0 0 0 12-12V92a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12Zm-128 0h128v32H32z"></svg:path>`,
})
export class IonEnterSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
