import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkiffMailIcon],svg[arcticons-skiff-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-28a5 5 0 0 1-5-5v-28a4 4 0 0 1 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.499 13.66L23.97 25L5.5 13.66m.115 7.248l34.303 20.975M42.5 20.85L24.03 32.13"></svg:path>`,
})
export class ArcticonsSkiffMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
