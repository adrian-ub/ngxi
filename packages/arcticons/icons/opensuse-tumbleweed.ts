import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpensuseTumbleweedIcon],svg[arcticons-opensuse-tumbleweed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 24A9.25 9.25 0 1 1 24 14.75M33.25 24A9.25 9.25 0 1 1 24 33.25M33.25 24h-18.5M24 14.75v18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 14.75h9.25V5.5M42.5 33.25h-9.25v9.25"></svg:path>`,
})
export class ArcticonsOpensuseTumbleweedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
