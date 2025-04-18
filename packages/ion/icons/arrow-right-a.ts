import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowRightAIcon],svg[ion-arrow-right-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448.5 256.5l-192-192v112h-192v160h192v112z" fill="currentColor"></svg:path>`,
})
export class IonArrowRightAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
