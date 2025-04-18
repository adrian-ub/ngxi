import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLivresDeProchesIcon],svg[arcticons-livres-de-proches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 41.676c-1.47-3.758-8.439-10.139-18.5-9.317V6.396c10.061-.822 17.03 5.559 18.5 9.317m0 25.963c1.47-3.758 8.439-10.139 18.5-9.317V6.396c-10.061-.822-17.03 5.559-18.5 9.317m0 0v25.963"></svg:path>`,
})
export class ArcticonsLivresDeProchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
