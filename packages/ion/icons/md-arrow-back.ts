import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowBackIcon],svg[ion-md-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
