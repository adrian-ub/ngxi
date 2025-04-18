import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPackageIcon],svg[uil-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-9 2h4v3.13l-1.45-1a1 1 0 0 0-1.1 0l-1.45 1Zm10 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v5a1 1 0 0 0 .53.88a1 1 0 0 0 1-.05L12 8.2l2.45 1.63A1 1 0 0 0 16 9V4h3a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilPackageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
