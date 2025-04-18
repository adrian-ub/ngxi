import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChestnyjZnakIcon],svg[arcticons-chestnyj-znak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.947 5.5H9.5a4 4 0 0 0-4 4v5.447m37 0V9.5a4 4 0 0 0-4-4h-5.447M5.5 33.053V38.5a4 4 0 0 0 4 4h5.447m18.106 0H38.5a4 4 0 0 0 4-4v-5.447m-27.594-8.637l5.779 5.647l12.409-12.126"></svg:path>`,
})
export class ArcticonsChestnyjZnakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
