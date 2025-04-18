import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartCircleIcon],svg[pepicons-pop-cart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.513 9h-9.026a2.5 2.5 0 0 0-2.437 3.057l.913 4A2.5 2.5 0 0 0 11.401 18H18.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 19.513 9m-9.137 2.013a.5.5 0 0 1 .111-.013h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 18.6 16h-7.2a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M6.49 5H5a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM13 20.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCartCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
