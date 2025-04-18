import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaSelectIcon],svg[gala-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 16.000736,48.000563 A 31.999783,31.999783 0 0 1 48.000519,16.000782"></svg:path><svg:path d="m -239.99926,48.000563 a 31.999783,31.999783 0 0 1 31.99978,-31.999781" transform="scale(-1 1)"></svg:path><svg:path d="m -239.99926,-207.99947 a 31.999783,31.999783 0 0 1 31.99978,-31.99978" transform="scale(-1)"></svg:path><svg:path d="m 16.000736,-207.99947 a 31.999783,31.999783 0 0 1 31.999783,-31.99978" transform="scale(1 -1)"></svg:path><svg:path d="m 239.99923,143.99987 v 31.9998"></svg:path><svg:path d="M 239.99923,80.000312 V 112.00011"></svg:path><svg:path d="m 16.000747,143.99991 v 31.99976"></svg:path><svg:path d="M 16.000751,80.000312 V 112.00011"></svg:path><svg:path d="M 112.00008,16.000744 H 80.000284"></svg:path><svg:path d="M 175.99964,16.000748 H 143.99988"></svg:path><svg:path d="M 112.00008,239.99922 H 80.000284"></svg:path><svg:path d="M 175.99964,239.99922 H 143.99988"></svg:path><svg:path d="M 96.000202,127.99999 H 159.99976"></svg:path><svg:path d="M 128,96.000192 V 159.99979"></svg:path></svg:g>`,
})
export class GalaSelectIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
