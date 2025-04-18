import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImageOff20Icon],svg[fluent-color-image-off-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImageOff204)" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorImageOff200)" d="m16.122 16.121l-5.238-5.237a1.25 1.25 0 0 0-1.768 0L3.88 16.12A3 3 0 0 0 6 17h8a3 3 0 0 0 2.122-.879"></svg:path><svg:circle cx="12.5" cy="7.5" r="1.5" fill="url(#fluentColorImageOff201)"></svg:circle><svg:path fill="url(#fluentColorImageOff202)" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" opacity=".5"></svg:path><svg:path fill="url(#fluentColorImageOff203)" d="M2.293 2.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414"></svg:path><svg:defs><svg:lineargradient id="fluentColorImageOff200" x1="8.251" x2="9.715" y1="10.518" y2="17.343" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E7DEDE"></svg:stop><svg:stop offset="1" stop-color="#D3D3D3"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff201" x1="11.9" x2="12.996" y1="5.667" y2="9.612" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#E4E4E4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff202" x1="17" x2="3" y1="3" y2="17" gradientUnits="userSpaceOnUse"><svg:stop offset=".464" stop-opacity="0"></svg:stop><svg:stop offset=".522"></svg:stop><svg:stop offset=".618" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff203" x1="2" x2="15" y1="-1" y2="18.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E82C41"></svg:stop><svg:stop offset="1" stop-color="#AA1D2D"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImageOff204" cx="0" cy="0" r="1" gradientTransform="rotate(51.687 3.782 -5.018)scale(38.7123 35.2114)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#A9A9A9"></svg:stop><svg:stop offset=".695" stop-color="#898989"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImageOff20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
