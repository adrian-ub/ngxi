import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdEaselIcon],svg[ion-md-easel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 176h256v128H128z" fill="currentColor"></svg:path><svg:path d="M448 96H64c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H448c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 240H96V144h320v192z" fill="currentColor"></svg:path><svg:path d="M80 464h57l22.5-64h-56.4z" fill="currentColor"></svg:path><svg:path d="M279.4 48h-46.8l-11.5 32h69.8z" fill="currentColor"></svg:path><svg:path d="M375 464h57l-23-64h-56.5z" fill="currentColor"></svg:path><svg:path d="M232 400h48v32h-48z" fill="currentColor"></svg:path>`,
})
export class IonMdEaselIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
