import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAllenPlusIcon],svg[arcticons-allen-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 16.377l7.885 21.132a3.91 3.91 0 0 0 3.667 2.545H42.5L30.513 7.946H17.488L5.5 40.054h6.948a3.91 3.91 0 0 0 3.667-2.545L26.513 9.643a2.61 2.61 0 0 1 2.445-1.697h1.555"></svg:path>`,
})
export class ArcticonsAllenPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
