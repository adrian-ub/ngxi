import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPackageIcon],svg[picon-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h3v2h2V4h3v4H0m2-8h1.5L3 3H0m4.5-3H6l2 3H5"></svg:path>`,
})
export class PiconPackageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
