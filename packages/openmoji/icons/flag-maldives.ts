import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagMaldivesIcon],svg[openmoji-flag-maldives-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-miterlimit="10" stroke-width="8.861" d="M9.431 21.43h53.14v29.14H9.431z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34.59 36a6.215 6.215 0 0 1 5.405-5.885A7.5 7.5 0 0 0 38.698 30c-3.702 0-6.703 2.686-6.703 6s3.001 6 6.703 6a7.5 7.5 0 0 0 1.297-.114A6.215 6.215 0 0 1 34.59 36"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagMaldivesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
