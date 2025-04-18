import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPlusCircleIcon],svg[ps-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0Q150 0 75 75T0 256t75 181t181 75t181-75t75-181t-75-181T256 0m0 469q-88 0-150.5-62.5T43 256t62.5-150.5T256 43t150.5 62.5T469 256t-62.5 150.5T256 469m107-234h-86v-86q0-21-21-21t-21 21v86h-86q-21 0-21 21t21 21h86v86q0 21 21 21t21-21v-86h86q21 0 21-21t-21-21"></svg:path>`,
})
export class PsPlusCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
