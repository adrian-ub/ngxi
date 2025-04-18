import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImageOff24Icon],svg[fluent-color-image-off-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImageOff244)" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"></svg:path><svg:path fill="url(#fluentColorImageOff240)" d="M20.515 19.46A3.25 3.25 0 0 1 17.75 21H6.25a3.25 3.25 0 0 1-2.765-1.54l6.939-6.812l.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117z"></svg:path><svg:path fill="url(#fluentColorImageOff241)" d="M16 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path fill="url(#fluentColorImageOff242)" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"></svg:path><svg:path fill="url(#fluentColorImageOff243)" d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"></svg:path><svg:defs><svg:lineargradient id="fluentColorImageOff240" x1="9.567" x2="11.594" y1="12.003" y2="21.477" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E7DEDE"></svg:stop><svg:stop offset="1" stop-color="#D3D3D3"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff241" x1="15.2" x2="16.661" y1="5.556" y2="10.816" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#E4E4E4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff242" x1="21" x2="3" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop offset=".464" stop-opacity="0"></svg:stop><svg:stop offset=".49"></svg:stop><svg:stop offset=".582" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff243" x1="2" x2="18.25" y1="-1.75" y2="22.625" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E82C41"></svg:stop><svg:stop offset="1" stop-color="#AA1D2D"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImageOff244" cx="0" cy="0" r="1" gradientTransform="rotate(51.687 5.32 -7.765)scale(49.7729 45.2718)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#A9A9A9"></svg:stop><svg:stop offset=".695" stop-color="#898989"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImageOff24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
