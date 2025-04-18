import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPackageIcon],svg[charm-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 5.75v8.5h12.5v-8.5l-3.5-4h-5.5zm6.25-4v3.5m-5.75.5h11.5"></svg:path>`,
})
export class CharmPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
