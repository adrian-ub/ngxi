import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwiftInstallerIcon],svg[arcticons-swift-installer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="24.233" height="24.233" x="14.682" y="13.018" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.462" transform="rotate(-44.938 26.798 25.135)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.366 10.445l4.867-4.857m-5 22.107l5.13-5.12m-2.684 7.57l5.13-5.119m-10.021.218l5.13-5.119M13.88 38.222c0-2.314-4.19-8.833-4.19-8.833S5.5 35.908 5.5 38.222a4.19 4.19 0 1 0 8.38 0"></svg:path>`,
})
export class ArcticonsSwiftInstallerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
