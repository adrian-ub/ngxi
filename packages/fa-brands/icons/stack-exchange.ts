import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsStackExchangeIcon],svg[fa-brands-stack-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.7 332.3h412.7v22c0 37.7-29.3 68-65.3 68h-19L259.3 512v-89.7H83c-36 0-65.3-30.3-65.3-68zm0-23.6h412.7v-85H17.7zm0-109.4h412.7v-85H17.7zM365 0H83C47 0 17.7 30.3 17.7 67.7V90h412.7V67.7C430.3 30.3 401 0 365 0"></svg:path>`,
})
export class FaBrandsStackExchangeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
