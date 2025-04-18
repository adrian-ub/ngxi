import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPricetagSharpIcon],svg[ion-pricetag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 32L16 320l176 176l288-288V32Zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
