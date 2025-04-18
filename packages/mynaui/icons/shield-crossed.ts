import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldCrossedIcon],svg[mynaui-shield-crossed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21s7-4.6 7-10m-7 10s-7-4.6-7-10m7 10V3m7 8V6.16a.51.51 0 0 0-.457-.506c-1.998-.2-3.915-.89-5.582-2.009L12 3m7 8H5m7-8l-.961.645a12.2 12.2 0 0 1-5.582 2.01A.51.51 0 0 0 5 6.16V11"></svg:path>`,
})
export class MynauiShieldCrossedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
