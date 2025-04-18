import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotesnookIcon],svg[arcticons-notesnook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.84 35.638C33.923 40.27 29.325 43.5 24 43.5c-7.091 0-12.84-5.749-12.84-12.84v-5.262m25.68 3.789V17.34C36.84 10.249 31.091 4.5 24 4.5H11.16v13.805"></svg:path>`,
})
export class ArcticonsNotesnookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
