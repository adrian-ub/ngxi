import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdfmobilitsIcon],svg[arcticons-idfmobilits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.38 43.5c1.152-1.888 10.637-14.918 13.814-14.918c4.835 0 12.222 11.328 14.735 14.918M9.611 25.635c2.579-2.257 8.887-4.927 14.78-5.756s12.939-4.052 14.228-5.94M24.76 4.5c2.579 0 3.73 2.026 3.73 4.374s-2.026 5.894-4.835 5.894s-3.821-2.302-3.821-4.19S21.306 4.5 24.76 4.5"></svg:path>`,
})
export class ArcticonsIdfmobilitsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
