import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAquaMailIcon],svg[arcticons-aqua-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.986 40.303l12.203-9.238a3 3 0 0 1 3.622 0l12.2 9.243m-17-8.352L3.496 17.517m23.503 14.449L44.51 17.53m-7.84.417l-10.78 8.872a3.105 3.105 0 0 1-3.947-.002l-10.77-8.878c9.215-2.828 14.002 5.993 25.496.008"></svg:path>`,
})
export class ArcticonsAquaMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
