import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdNavigateIcon],svg[ion-md-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z" fill="currentColor"></svg:path>`,
})
export class IonMdNavigateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
