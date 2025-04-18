import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosCropStrongIcon],svg[ion-ios-crop-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 64h32v48h-32z" fill="currentColor"></svg:path><svg:path d="M160 352V176h-32v208h208v-32z" fill="currentColor"></svg:path><svg:path d="M400 352h48v32h-48z" fill="currentColor"></svg:path><svg:path d="M64 128v32h288v288h32V128z" fill="currentColor"></svg:path>`,
})
export class IonIosCropStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
