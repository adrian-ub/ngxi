import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltLightIcon],svg[lets-icons-del-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M18.5 7c0 1.5-3 2.5-6.5 2.5S5.5 8.5 5.5 7s3-2.5 6.5-2.5s6.5 1 6.5 2.5Z"></svg:path><svg:path d="m5.5 7l1.813 10.425a1.83 1.83 0 0 0 1.222 1.42v0c2.25.75 4.68.75 6.93 0v0a1.83 1.83 0 0 0 1.222-1.42L18.5 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
