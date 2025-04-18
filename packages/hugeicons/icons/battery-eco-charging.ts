import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBatteryEcoChargingIcon],svg[hugeicons-battery-eco-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 19h5c2.828 0 4.243 0 5.121-.879S19 15.828 19 13c0-1.864 0-3.113-.251-4M5.5 7.038c-1.258.07-2.052.271-2.621.84C2 8.758 2 10.171 2 13c0 2.243 0 3.597.439 4.5M19 10.5l1.027.171c.681.114 1.022.17 1.28.336a1.5 1.5 0 0 1 .573.675c.12.282.12.627.12 1.318c0 .69 0 1.036-.12 1.318a1.5 1.5 0 0 1-.572.675c-.259.165-.6.222-1.28.336L19 15.5"></svg:path><svg:path d="M5.033 20C4.545 14.6 9 13.5 11 11m.034 4.835c2.545-.71 4.177-2.413 4.782-4.987c.686-2.915-.543-6.885-3.713-6.848c0 0 .322 1.26.04 1.876c-1.04 2.275-4.643 2.117-5.81 5c-.696 1.615-.275 3.418 1.033 4.452c.822.65 2.446.849 3.668.507"></svg:path></svg:g>`,
})
export class HugeiconsBatteryEcoChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
