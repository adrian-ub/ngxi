import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoprismIcon],svg[arcticons-photoprism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 36.059L24 5.912l20.5 30.147Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 5.912l6.612 3.617l12.682 32.56l-36.176-2.413L3.5 36.06m3.618 3.617L30.612 9.528m12.682 32.56l1.206-6.03"></svg:path>`,
})
export class ArcticonsPhotoprismIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
