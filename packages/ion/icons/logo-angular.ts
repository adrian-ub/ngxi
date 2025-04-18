import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoAngularIcon],svg[ion-logo-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.57 256h84.85l-42.43-89.36z"></svg:path><svg:path fill="currentColor" d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112Zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280Z"></svg:path>`,
})
export class IonLogoAngularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
