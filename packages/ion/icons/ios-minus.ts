import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosMinusIcon],svg[ion-ios-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H128v-17h256v17z" fill="currentColor"></svg:path>`,
})
export class IonIosMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
