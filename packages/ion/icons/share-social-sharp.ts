import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionShareSocialSharpIcon],svg[ion-share-social-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.7 69.7 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324"></svg:path>`,
})
export class IonShareSocialSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
