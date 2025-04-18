import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardFreezeIcon],svg[hugeicons-credit-card-freeze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9c-.037-2.252-.21-3.553-1.044-4.487a4.4 4.4 0 0 0-.555-.522C19.146 3 17.266 3 13.506 3h-3.002c-3.76 0-5.64 0-6.896.99a4.4 4.4 0 0 0-.555.523C2 5.693 2 7.463 2 11s0 5.306 1.053 6.487q.254.284.555.522C4.864 19 6.744 19 10.504 19h.996M2 8h20m-4 5v1.778m0 0v4.444m0-4.444L19.5 14m-1.5.778L16.5 14m1.5 5.222V21m0-1.778L16.5 20m1.5-.778l1.5.778m2.5-3h-1.778m0 0h-4.444m4.444 0L21 18.5m-.778-1.5L21 15.5M15.778 17H14m1.778 0L15 15.5m.778 1.5L15 18.5" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardFreezeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
