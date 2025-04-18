import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdCellularIcon],svg[ion-md-cellular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 448h384V64L64 448z" fill="currentColor"></svg:path>`,
})
export class IonMdCellularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
