import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShieldCrossFillIcon],svg[ri-shield-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z"></svg:path>`,
})
export class RiShieldCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
