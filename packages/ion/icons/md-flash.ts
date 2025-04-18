import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdFlashIcon],svg[ion-md-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M160 48v224h64v192l128-256h-64l64-160H160z" fill="currentColor"></svg:path>`,
})
export class IonMdFlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
