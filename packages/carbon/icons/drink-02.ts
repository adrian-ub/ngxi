import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDrink02Icon],svg[carbon-drink-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 10.414l3-3L24.586 6l-3.293 3.293A1 1 0 0 0 21 10v4h-7.074l1.143 16h8.862l1.143-16H23zM22.07 28h-5.14l-.856-12h6.852z"></svg:path><svg:path fill="currentColor" d="M16 7.051V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.051A5.93 5.93 0 0 0 6 11.5V29a1 1 0 0 0 1 1h5v-2H8V11.5c0-2.356 2-3.48 2-3.48V5h4v3.02s2 1.124 2 3.48v.5h2v-.5a5.93 5.93 0 0 0-2-4.449"></svg:path>`,
})
export class CarbonDrink02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
