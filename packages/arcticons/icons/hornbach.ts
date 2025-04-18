import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHornbachIcon],svg[arcticons-hornbach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.955 2.832L2.892 19.895M27.131 2.727L2.727 27.131m29.9-22.829L4.322 32.607M37.07 6.93L6.929 37.071M40.661 10.41L10.41 40.661m34.124-10.269L32.607 18.465m9.717 16.788L29.071 22m10.131 17.202L25.535 25.535m9.717 16.788L22 29.071m8.391 15.463L18.464 32.607"></svg:path>`,
})
export class ArcticonsHornbachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
