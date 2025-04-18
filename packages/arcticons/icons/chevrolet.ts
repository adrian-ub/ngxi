import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChevroletIcon],svg[arcticons-chevrolet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.389 26.422H30.543v3.114H17.835v-3.114H3.5l1.914-5h12.42v-2.958h12.709v2.958H44.5z"></svg:path>`,
})
export class ArcticonsChevroletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
