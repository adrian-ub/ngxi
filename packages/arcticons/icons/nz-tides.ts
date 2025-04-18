import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNzTidesIcon],svg[arcticons-nz-tides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.871 0 21.5 9.629 21.5 21.5S35.871 45.5 24 45.5S2.5 35.871 2.5 24S12.129 2.5 24 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.985 22.204C10.566 3.403 22.205 3.403 25.795 24c1.787 13.434 12.542 13.434 15.22-1.796M15.934 8.77v26.878m17.026 0v-1.796"></svg:path>`,
})
export class ArcticonsNzTidesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
