import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlaskaAirlinesIcon],svg[arcticons-alaska-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.876 37.235c6.053-11.607 15.906-22.837 20.624-26.47c-3.215 5.929-2.63 23.63-2.13 26.47m-3.701-14.237H11.5"></svg:path>`,
})
export class ArcticonsAlaskaAirlinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
