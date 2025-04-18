import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpScreenLockPortraitIcon],svg[ic-sharp-screen-lock-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6v-5h-1v-.9c0-1-.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9zm1.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM19 1H5v22h14zm-2 18H7V5h10z"></svg:path>`,
})
export class IcSharpScreenLockPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
