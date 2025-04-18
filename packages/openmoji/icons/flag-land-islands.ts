import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagLandIslandsIcon],svg[openmoji-flag-land-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" stroke="#f1b31c" stroke-miterlimit="10" stroke-width="2" d="M67 33H30V17h-6v16H5v6h19v16h6V39h37v-6z"></svg:path><svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path></svg:g>`,
})
export class OpenmojiFlagLandIslandsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
