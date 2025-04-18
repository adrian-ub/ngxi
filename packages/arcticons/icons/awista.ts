import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAwistaIcon],svg[arcticons-awista-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 22.003S21.106 9.669 4.5 35.439c9.991-9.302 24.944-13.16 36.795-7.786z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.848 24.211v-11.65h20.67v6.89m0 6.34v7.44h-20.67v-4.7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.708 21.891v-5.47h12.95v2.65m0 6.2v4.1h-12.95v-2.36"></svg:path>`,
})
export class ArcticonsAwistaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
