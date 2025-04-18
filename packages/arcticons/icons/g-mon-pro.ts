import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGMonProIcon],svg[arcticons-g-mon-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 5.625l9.093 5.25v10.5L24 26.625l-9.093-5.25v-10.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.093 21.375l9.093 5.25v10.5l-9.093 5.25L24 37.125v-10.5m0 10.5l-9.093 5.25l-9.093-5.25v-10.5l9.093-5.25"></svg:path>`,
})
export class ArcticonsGMonProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
