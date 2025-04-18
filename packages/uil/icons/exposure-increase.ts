import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilExposureIncreaseIcon],svg[uil-exposure-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h-1V6a1 1 0 0 0-2 0v1H7a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V9h1a1 1 0 0 0 0-2m2 11h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m6-16H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M4 18.59V5a1 1 0 0 1 1-1h13.59ZM20 19a1 1 0 0 1-1 1H5.41L20 5.41Z"></svg:path>`,
})
export class UilExposureIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
