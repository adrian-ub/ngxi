import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAssolutoRacingIcon],svg[arcticons-assoluto-racing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.375 25.486L4.5 14.063h20.08l4.287 4.503M40.914 31.22l2.586 2.717H23.42l-5.832-6.126"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.195 23.388l6.053 6.358m-25.972.001l4.827-12.407h1.794l4.828 12.406m3.619 0V17.34h8.828c1.734 0 3.13 1.349 3.13 3.024s-1.396 3.024-3.13 3.024h-8.827"></svg:path>`,
})
export class ArcticonsAssolutoRacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
