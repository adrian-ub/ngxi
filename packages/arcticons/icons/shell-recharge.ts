import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShellRechargeIcon],svg[arcticons-shell-recharge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.426 19.656l-9.81 9.81l6.54 6.541c-7.225 7.225-18.938 7.225-26.163 0s-7.225-18.937 0-26.162l13.08 13.08l-18.5 18.5M28.344 6.574l-7.358 7.358"></svg:path>`,
})
export class ArcticonsShellRechargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
