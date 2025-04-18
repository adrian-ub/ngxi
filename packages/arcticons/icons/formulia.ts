import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFormuliaIcon],svg[arcticons-formulia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.102 35.915v-23.83m-11.188 23.83v-23.83m0 23.83H6.674a2.17 2.17 0 0 1-1.64-3.592L12.245 24l-7.21-8.323a2.17 2.17 0 0 1 1.64-3.592H43.5"></svg:path>`,
})
export class ArcticonsFormuliaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
