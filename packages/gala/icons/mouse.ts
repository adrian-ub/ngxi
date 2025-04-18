import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaMouseIcon],svg[gala-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="m 63.998705,64.001121 c 0,64.001289 -16.00032,48.000969 -16.00032,96.001929"></svg:path><svg:path d="m 192.00129,64.001121 c 0,-16.000322 0,-22.762857 -16.00032,-32.000645"></svg:path><svg:path d="m 128,48.000796 v 32.00065"></svg:path><svg:path d="m 79.99903,32.000476 c 0,0 32.00064,-16.000321 48.00097,-16.000321 16.00032,0 48.00097,16.000321 48.00097,16.000321"></svg:path><svg:path d="m 192.00129,64.001121 c 0,64.001289 16.00032,48.000969 16.00032,96.001929"></svg:path><svg:path d="m 208.00161,160.00305 a 80.00161,80.00161 0 0 1 -40.00081,69.28343 80.00161,80.00161 0 0 1 -80.001607,0 80.00161,80.00161 0 0 1 -40.000803,-69.28343"></svg:path><svg:path d="m 63.998705,64.001125 c 0,-16.000326 2e-6,-22.762857 16.000325,-32.000649"></svg:path></svg:g>`,
})
export class GalaMouseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
