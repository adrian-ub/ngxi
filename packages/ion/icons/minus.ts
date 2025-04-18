import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMinusIcon],svg[ion-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 224h384v64H64z" fill="currentColor"></svg:path>`,
})
export class IonMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
