import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherShieldOffIcon],svg[feather-shield-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3l-3.16 1.18M4.73 4.73L4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38M1 1l22 22"></svg:path>`,
})
export class FeatherShieldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
