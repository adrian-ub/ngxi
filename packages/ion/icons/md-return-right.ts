import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdReturnRightIcon],svg[ion-md-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z" fill="currentColor"></svg:path>`,
})
export class IonMdReturnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
