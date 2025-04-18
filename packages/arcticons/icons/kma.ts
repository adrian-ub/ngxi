import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKmaIcon],svg[arcticons-kma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.561 5.45c0 12.34 1.986 19.26 10.189 23.474M34.579 5.45c0 10.44-1.422 17.002-6.829 21.327M13.44 5.45c0 12.34-1.986 19.26-10.189 23.474M13.421 5.45c0 10.44 1.422 17.002 6.829 21.327M24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5S45.5 35.874 45.5 24S35.874 2.5 24 2.5M10.958 40.852C21.382 31.388 24 19.18 24.03 2.5c.03 16.68 2.648 28.888 13.07 38.352"></svg:path>`,
})
export class ArcticonsKmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
