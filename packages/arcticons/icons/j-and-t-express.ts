import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJAndTExpressIcon],svg[arcticons-j-and-t-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.829 18.163l-3.147 11.959H4.5m28.442 0l2.848-11.959m-6.572 0H43.5m-16.269 5.695c-5.125 10.25-15.375 3.416-6.264-1.14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.231 30.122l-7.414-9.681q-2.266-3.417 5.706-2.278"></svg:path>`,
})
export class ArcticonsJAndTExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
