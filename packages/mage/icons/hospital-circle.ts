import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHospitalCircleIcon],svg[mage-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M16.763 10.942v2.116a.53.53 0 0 1-.53.53h-2.645v2.645a.53.53 0 0 1-.53.53h-2.116a.53.53 0 0 1-.53-.53v-2.645H7.768a.53.53 0 0 1-.53-.53v-2.116a.53.53 0 0 1 .53-.53h2.645V7.768a.53.53 0 0 1 .53-.53h2.116a.53.53 0 0 1 .53.53v2.645h2.645a.53.53 0 0 1 .53.53"></svg:path></svg:g>`,
})
export class MageHospitalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
