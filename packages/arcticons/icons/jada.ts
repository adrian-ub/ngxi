import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJadaIcon],svg[arcticons-jada-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.009 31.602a11.99 11.99 0 0 0 23.981 0V4.5H24.326v27.026"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.991 4.5l-11.664 7.573L35.99 18.13l-11.663 6.8l11.663 6.84l-11.663-.246l8.208 8.434m-8.209-8.434l-8.52 8.764"></svg:path>`,
})
export class ArcticonsJadaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
