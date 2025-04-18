import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixYouCornflowerIconPackIcon],svg[arcticons-pix-you-cornflower-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.064 38.558l7.103 2.621L17.833 6.821L5.5 41.179l7.103-2.621"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.397 38.558l7.103 2.621L30.167 6.821L24 24"></svg:path>`,
})
export class ArcticonsPixYouCornflowerIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
