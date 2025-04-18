import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownAIcon],svg[ion-arrow-down-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.5 448.5l192-192h-112v-192h-160v192h-112z" fill="currentColor"></svg:path>`,
})
export class IonArrowDownAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
