import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinshellPayIcon],svg[arcticons-finshell-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.875 34.706V4.5h15.617c6.449 0 6.43 7.273 0 7.273h-7.874v6.88h7.94c5.929 0 5.927 7.338 0 7.338h-7.48V43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.95 43.5V33.198c13.345.273 15.176-12.952 8.136-18.346"></svg:path>`,
})
export class ArcticonsFinshellPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
