import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosMinusEmptyIcon],svg[ion-ios-minus-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 265H128v-17h256v17z" fill="currentColor"></svg:path>`,
})
export class IonIosMinusEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
