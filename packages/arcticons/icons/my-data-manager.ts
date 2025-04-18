import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyDataManagerIcon],svg[arcticons-my-data-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 26.004h5.266V42.5H10.5zM21.367 5.5h5.266v37h-5.266zm10.867 12.116H37.5V42.5h-5.266z"></svg:path>`,
})
export class ArcticonsMyDataManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
