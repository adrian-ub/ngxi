import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStyleciIcon],svg[logos-styleci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E44041" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="M153.49 185.36c-6.776 2.51-18.07 4.518-28.109 4.518c-31.372 0-51.45-21.082-51.45-61.489c0-43.67 23.34-62.744 51.2-62.744c12.297 0 21.583 2.76 28.109 5.772l8.03-35.89c-5.52-3.011-19.073-7.027-38.65-7.027c-49.944 0-95.12 32.878-95.12 102.399c0 53.709 29.113 96.626 90.603 96.626c19.074 0 34.133-3.514 40.91-6.525zm30.87 39.655h44.173V31.01H184.36z"></svg:path>`,
})
export class LogosStyleciIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
