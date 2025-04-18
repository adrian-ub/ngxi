import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpAIcon],svg[ion-arrow-up-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.5 64.5l-192 192h112v192h160v-192h112z" fill="currentColor"></svg:path>`,
})
export class IonArrowUpAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
