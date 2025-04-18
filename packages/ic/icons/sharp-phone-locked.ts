import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhoneLockedIcon],svg[ic-sharp-phone-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z"></svg:path><svg:path fill="currentColor" d="m21 15l-5-1l-2.9 2.9c-2.5-1.43-4.57-3.5-6-6L10 8L9 3H3c0 3.28.89 6.35 2.43 9c1.58 2.73 3.85 4.99 6.57 6.57C14.65 20.1 17.72 21 21 21z"></svg:path>`,
})
export class IcSharpPhoneLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
