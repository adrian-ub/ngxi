import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveIcon],svg[ion-md-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 235h320v42H96z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
