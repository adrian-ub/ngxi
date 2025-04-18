import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNortonPasswordManagerIcon],svg[arcticons-norton-password-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.648 44.2C6.844 40.633 1.017 30.54 2.828 20.267C4.64 9.99 13.568 2.5 24 2.5s19.36 7.491 21.171 17.766C46.983 30.54 41.156 40.632 31.352 44.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.86 39.453A16 16 0 0 1 8.137 21.911A15.999 15.999 0 1 1 28.14 39.453M24 23.97v-2.957"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.17 23.056l2.83.914l-1.749 2.392m4.579-3.306L24 23.97l1.749 2.392m5.944-2.392v-2.957m-2.829 2.043l2.83.914l-1.75 2.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.523 23.056l-2.83.914l1.75 2.392M16.307 23.97v-2.957m-2.83 2.043l2.83.914l-1.75 2.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.136 23.056l-2.83.914l1.75 2.392"></svg:path>`,
})
export class ArcticonsNortonPasswordManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
