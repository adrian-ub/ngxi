import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdHomeIcon],svg[ion-md-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z" fill="currentColor"></svg:path>`,
})
export class IonMdHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
