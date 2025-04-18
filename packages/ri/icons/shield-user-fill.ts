import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShieldUserFillIcon],svg[ri-shield-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-4.473 5h8.946a4.5 4.5 0 0 0-8.946 0"></svg:path>`,
})
export class RiShieldUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
