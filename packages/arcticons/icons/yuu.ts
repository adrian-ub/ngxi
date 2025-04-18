import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYuuIcon],svg[arcticons-yuu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 19.09c.238 1.211 11.346 22.229 11.698-4.962c.062 16.39-4.812 22.372-7.689 24.167m11.445-21.869c1.675 10.736 9.828 11.919 9.561-3.13m3.46-1.227c.183 5.473 6.23 11.5 6.525-2.364"></svg:path>`,
})
export class ArcticonsYuuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
