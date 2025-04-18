import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPhotosOutlineIcon],svg[ion-ios-photos-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 128v320h384V128H96zm368 304H112V144h352v288z" fill="currentColor"></svg:path><svg:path d="M32 64v320h48v-16H48V80h352v32h16V64z" fill="currentColor"></svg:path>`,
})
export class IonIosPhotosOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
