import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOrangevvmIcon],svg[arcticons-orangevvm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 16a8.31 8.31 0 0 0-8 8a8.3 8.3 0 0 0 8 8a8.3 8.3 0 0 0 8-8a8.3 8.3 0 0 0-8-8m24 0a8.3 8.3 0 0 0-8 8a8.3 8.3 0 0 0 8 8a8.31 8.31 0 0 0 8-8a8.3 8.3 0 0 0-8-8M11.99 31.99h24.02"></svg:path>`,
})
export class ArcticonsOrangevvmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
