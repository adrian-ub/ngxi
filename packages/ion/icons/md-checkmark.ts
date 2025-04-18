import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckmarkIcon],svg[ion-md-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
