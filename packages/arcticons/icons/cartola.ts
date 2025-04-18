import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCartolaIcon],svg[arcticons-cartola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.742 31.657l.556-5.225l1.778-16.584H11.119l1.751 17.168l.475 4.641m22.626 6.495l-27.846-1.69L5.5 31.661h37zm-1.673-11.72l-21.428.584"></svg:path>`,
})
export class ArcticonsCartolaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
