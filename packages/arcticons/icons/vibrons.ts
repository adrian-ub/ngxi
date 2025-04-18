import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVibronsIcon],svg[arcticons-vibrons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.044v14.23m7.4 10.206V5.969m7.4 28.391V6.106m7.4 7.13v28.796m7.4-.397V6.292m7.4 5.564v21.29"></svg:path>`,
})
export class ArcticonsVibronsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
