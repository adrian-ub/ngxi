import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLazadaIcon],svg[arcticons-lazada-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.382 6.28l-6.426 3.71c-2.182 1.26-5.732 1.254-7.928-.014L13.56 6.242L4.5 11.473l19.56 11.294L43.5 11.544z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 11.544v19.27L24.966 41.517a1.81 1.81 0 0 1-1.81 0L4.5 30.745V11.473m19.561 11.294v18.987"></svg:path>`,
})
export class ArcticonsLazadaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
