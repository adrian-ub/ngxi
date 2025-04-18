import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhatabookIcon],svg[arcticons-khatabook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.04 8.473l-.756 31.862L31.77 43.5l3.982-2.726h3.964V6.736h-3.964L31.77 4.5L9.342 8.465"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.358 8.465h2.778v30.7h-2.778z"></svg:path>`,
})
export class ArcticonsKhatabookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
