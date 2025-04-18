import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStepikIcon],svg[arcticons-stepik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.582 40.256a7.663 7.663 0 0 0 10.836 0l10.837-10.838a7.663 7.663 0 0 0-10.837-10.836L18.582 29.417A7.663 7.663 0 0 1 7.743 18.582L18.582 7.743a7.663 7.663 0 0 1 10.837 0"></svg:path>`,
})
export class ArcticonsStepikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
