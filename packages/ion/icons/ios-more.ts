import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosMoreIcon],svg[ion-ios-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"></svg:path><svg:path d="M102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"></svg:path><svg:path d="M410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"></svg:path>`,
})
export class IonIosMoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
