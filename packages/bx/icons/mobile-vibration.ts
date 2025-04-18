import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMobileVibrationIcon],svg[bx-mobile-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.535 2.808c-.756-.756-2.072-.756-2.828 0l-9.899 9.899a2 2 0 0 0 0 2.828l5.657 5.657c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l9.899-9.899c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414zm-5.656 16.97v1zl-5.657-5.657l9.899-9.899l5.657 5.657z"></svg:path><svg:circle cx="9" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m15.707 21.707l-1.414-1.414l6-6l1.414 1.415zM8.293 2.293l1.414 1.414l-6 6l-1.414-1.415z"></svg:path>`,
})
export class BxMobileVibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
