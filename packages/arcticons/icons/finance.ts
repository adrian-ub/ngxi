import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinanceIcon],svg[arcticons-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m26.278 35.094l-8.514-7.255c-4.112 3.45-8.09 7.067-12.265 10.407l.001 2.24a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V21.533s-11.027 9.18-16.222 13.56"></svg:path><svg:path d="M42.5 12.72L26.277 26.28l-8.514-7.254L5.5 29.433v4.086l12.263-10.406l8.514 7.253l16.225-13.56z"></svg:path></svg:g>`,
})
export class ArcticonsFinanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
