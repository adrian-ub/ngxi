import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNoDrinksIcon],svg[ic-sharp-no-drinks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22l8.23 8.23L11 14v5H6v2h12v-.17l1.78 1.78zM13 19v-3.17L16.17 19zM7.83 5l-2-2H21v2l-6.2 6.97L9.83 7h6.74l1.78-2z"></svg:path>`,
})
export class IcSharpNoDrinksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
