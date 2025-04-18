import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOneplusConnectIcon],svg[arcticons-oneplus-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.247 34.25l35.507-20.5L24 3.5L6.247 13.75zL24 44.5l17.754-10.25l-35.507-20.5"></svg:path>`,
})
export class ArcticonsOneplusConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
