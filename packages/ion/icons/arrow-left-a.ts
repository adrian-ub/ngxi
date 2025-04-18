import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowLeftAIcon],svg[ion-arrow-left-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64.5 256.5l192 192v-112h192v-160h-192v-112z" fill="currentColor"></svg:path>`,
})
export class IonArrowLeftAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
