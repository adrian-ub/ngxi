import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineNoDrinksIcon],svg[ic-baseline-no-drinks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.83 3H21v2l-6.2 6.97L9.83 7h6.74l1.78-2H7.83zm13.95 19.61L18 20.83V21H6v-2h5v-5l-1.37-1.54l-8.24-8.24L2.8 2.81L3 3l18.19 18.19zM16.17 19L13 15.83V19z"></svg:path>`,
})
export class IcBaselineNoDrinksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
