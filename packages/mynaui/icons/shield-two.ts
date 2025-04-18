import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldTwoIcon],svg[mynaui-shield-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21s7-4.6 7-10V6.16a.51.51 0 0 0-.457-.506c-1.998-.2-3.915-.89-5.582-2.009L12 3m0 18s-7-4.6-7-10V6.16c0-.261.198-.48.457-.506c1.998-.2 3.915-.89 5.582-2.009L12 3m0 18V3"></svg:path>`,
})
export class MynauiShieldTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
