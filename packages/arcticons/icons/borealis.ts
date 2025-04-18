import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBorealisIcon],svg[arcticons-borealis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.36 43.5H9.985v-39h13.373c9.961 0 16.366 10.651 8.482 18.23c10.256 6.01 7.941 20.77-8.482 20.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.841 22.73c-5.375.142-6.947 4.458-7.796 8.506c-1.513 7.216-10.189 2.924-14.061 10.256"></svg:path>`,
})
export class ArcticonsBorealisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
