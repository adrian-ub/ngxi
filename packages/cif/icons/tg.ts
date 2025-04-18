import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTgIcon],svg[cif-tg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#006A4E" d="M0 .75h300v185.5H0z"></svg:path><svg:path fill="#FFCE00" d="M0 37.85h300v37.1H0zm0 74.2h300v37.1H0z"></svg:path><svg:path fill="#D21034" d="M0 .75h111.248v111.3H0z"></svg:path><svg:path fill="#FFF" d="M22.12 45.509L42.827 60.56l-7.91 24.354l20.707-15.052l20.707 15.052l-7.909-24.354l20.707-15.051H63.534l-7.91-24.354l-7.909 24.354z"></svg:path></svg:g>`,
})
export class CifTgIcon {
  readonly viewBox = input("0 0 300 187")
  readonly width = input("1.61em")
  readonly height = input("1em")
}
