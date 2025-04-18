import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSoIcon],svg[cif-so-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4189DD" d="M0 0h300v200H0z"></svg:path><svg:path fill="#FFF" d="m104.208 85.122l28.301 20.561l-10.81 33.27L150 118.391l28.301 20.562l-10.81-33.27l28.301-20.561H160.81L150 51.852l-10.81 33.27z"></svg:path></svg:g>`,
})
export class CifSoIcon {
  readonly viewBox = input("0 0 300 200")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
