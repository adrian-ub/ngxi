import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdInformationIcon],svg[ion-md-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M232 235h48v137h-48z" fill="currentColor"></svg:path><svg:path d="M232 140h48v48h-48z" fill="currentColor"></svg:path>`,
})
export class IonMdInformationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
