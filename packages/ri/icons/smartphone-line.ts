import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSmartphoneLineIcon],svg[ri-smartphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v16h10V4zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiSmartphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
