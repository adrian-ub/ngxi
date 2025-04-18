import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGugalIcon],svg[arcticons-gugal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.52 9.527c5.377-5.37 14.086-5.37 19.463 0h0c5.077 5.079 5.4 13.207.74 18.672l.52.51h1.74l10.501 10.5l-3.28 3.291L28.703 32v-1.73l-.52-.52c-5.806 4.913-14.496 4.188-19.409-1.618c-4.612-5.451-4.293-13.525.737-18.594zm3.051 3.06a9.451 9.451 0 1 0 13.372 0a9.46 9.46 0 0 0-13.372 0m17.162 15.622l-1.55 1.54"></svg:path>`,
})
export class ArcticonsGugalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
