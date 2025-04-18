import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionListCircleIcon],svg[ion-list-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-88 302a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-71a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-73a24 24 0 1 1 24-24a24 24 0 0 1-24 24m184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonListCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
