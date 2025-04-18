import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionChevronUpCircleSharpIcon],svg[ion-chevron-up-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 270.63l-96-96l-96 96L137.37 296L256 177.37L374.63 296Z"></svg:path>`,
})
export class IonChevronUpCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
