import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCoffeealtIcon],svg[whh-coffeealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 256L704 960q-4 24-21.5 44t-42.5 20H256q-25 0-42.5-20T192 960L64 256q-27 0-45.5-19T0 191.5t18.5-45T64 128V64q0-27 18.5-45.5T128 0h640q26 0 45 18.5T832 64v64q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhCoffeealtIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
