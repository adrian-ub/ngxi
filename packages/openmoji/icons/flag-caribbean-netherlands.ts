import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagCaribbeanNetherlandsIcon],svg[openmoji-flag-caribbean-netherlands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 17v38l62-38z"></svg:path><svg:g fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m19.518 31l3.614 6.259h-7.228z"></svg:path><svg:path d="m19.518 39.345l-3.614-6.259h7.228z"></svg:path></svg:g><svg:circle cx="19.518" cy="35.173" r="6" fill="none" stroke="#000" stroke-miterlimit="10"></svg:circle><svg:path fill="#f1b31c" d="M5 17v16l25-16z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagCaribbeanNetherlandsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
