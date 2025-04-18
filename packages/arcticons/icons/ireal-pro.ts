import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrealProIcon],svg[arcticons-ireal-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.066 20.999c12.682 3.01 5.453 14.411-14.055 11.591L37.74 7.464c9.132 7.589 10.384 21.144 2.796 30.276S19.393 48.124 10.26 40.536S-.124 19.393 7.464 10.261a21.5 21.5 0 0 1 24.98-6.033"></svg:path>`,
})
export class ArcticonsIrealProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
