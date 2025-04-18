import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosListOutlineIcon],svg[ion-ios-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 80v352H80V80h352m16-16H64v384h384V64z" fill="currentColor"></svg:path><svg:path d="M192 152h192v16H192z" fill="currentColor"></svg:path><svg:path d="M192 248h192v16H192z" fill="currentColor"></svg:path><svg:path d="M192 344h192v16H192z" fill="currentColor"></svg:path><svg:circle cx="144" cy="160" r="16" fill="currentColor"></svg:circle><svg:circle cx="144" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="144" cy="352" r="16" fill="currentColor"></svg:circle>`,
})
export class IonIosListOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
