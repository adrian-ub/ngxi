import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosReorderIcon],svg[ion-ios-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 304h352v16H80z" fill="currentColor"></svg:path><svg:path d="M80 248h352v16H80z" fill="currentColor"></svg:path><svg:path d="M80 192h352v16H80z" fill="currentColor"></svg:path>`,
})
export class IonIosReorderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
