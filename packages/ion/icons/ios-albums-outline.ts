import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosAlbumsOutlineIcon],svg[ion-ios-albums-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 144v288H48V144h416m16-16H32v320h448V128z" fill="currentColor"></svg:path><svg:path d="M72 96h368v16H72z" fill="currentColor"></svg:path><svg:path d="M104 64h304v16H104z" fill="currentColor"></svg:path>`,
})
export class IonIosAlbumsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
