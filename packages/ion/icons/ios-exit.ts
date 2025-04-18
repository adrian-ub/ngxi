import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosExitIcon],svg[ion-ios-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 136v107h179.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c2.4 2.5 3.7 5.8 3.7 9.1 0 1.7-.3 3.4-1 5-.6 1.5-1.6 2.9-2.7 4.1l-69 70c-5 5.1-13.3 5.2-18.4.1-5.1-5-5.2-13.3-.1-18.4l47.2-47.9H144v107c0 22 18 40 40 40h240c22 0 40-18 40-40V136c0-22-18-40-40-40H184c-22 0-40 18-40 40z" fill="currentColor"></svg:path><svg:path d="M61 243c-7.2 0-13 5.8-13 13s5.8 13 13 13h83v-26H61z" fill="currentColor"></svg:path>`,
})
export class IonIosExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
