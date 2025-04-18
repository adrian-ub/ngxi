import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosGridViewOutlineIcon],svg[ion-ios-grid-view-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192h112zM320 320H192V192h128v128z" fill="currentColor"></svg:path>`,
})
export class IonIosGridViewOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
