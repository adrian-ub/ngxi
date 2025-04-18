import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCellularSharpIcon],svg[ion-cellular-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 432h-96V80h96Zm-128 0h-96V160h96Zm-128 0h-96V224h96Zm-128 0H16V288h96Z"></svg:path>`,
})
export class IonCellularSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
