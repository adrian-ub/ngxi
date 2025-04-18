import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdReorderIcon],svg[ion-md-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 348h320v36H96z" fill="currentColor"></svg:path><svg:path d="M96 128h320v36H96z" fill="currentColor"></svg:path><svg:path d="M96 200.7h320v35.6H96z" fill="currentColor"></svg:path><svg:path d="M96 275.8h320v35.6H96z" fill="currentColor"></svg:path>`,
})
export class IonMdReorderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
