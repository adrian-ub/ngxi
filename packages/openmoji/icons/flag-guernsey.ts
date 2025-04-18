import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGuernseyIcon],svg[openmoji-flag-guernsey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-miterlimit="10" stroke-width="2" d="M67 33H39V17h-6v16H5v6h28v16h6V39h28z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linejoin="round" d="M49.958 34.684H37.316V22h-2.632v12.684H22.042v2.632h12.642V50h2.632V37.316h12.642z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGuernseyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
