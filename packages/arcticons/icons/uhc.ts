import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUhcIcon],svg[arcticons-uhc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.878 14.446L35.122 4.5v27.878c0 6.143-4.98 11.122-11.122 11.122h0c-6.142 0-11.122-4.98-11.122-11.122z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.469 9.71v21.048a5.295 5.295 0 0 1-5.296 5.295h0a5.295 5.295 0 0 1-5.295-5.295"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.353 7.974V31.02a7.24 7.24 0 0 1-7.237 7.238h0a7.24 7.24 0 0 1-7.238-7.238"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.238 6.237v25.732a9.18 9.18 0 0 1-9.18 9.18h0a9.18 9.18 0 0 1-9.18-9.18"></svg:path>`,
})
export class ArcticonsUhcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
