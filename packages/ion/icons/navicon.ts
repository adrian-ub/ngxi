import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionNaviconIcon],svg[ion-navicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 241h320v32H96z" fill="currentColor"></svg:path><svg:path d="M96 145h320v32H96z" fill="currentColor"></svg:path><svg:path d="M96 337h320v32H96z" fill="currentColor"></svg:path>`,
})
export class IonNaviconIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
