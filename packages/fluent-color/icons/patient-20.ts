import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPatient20Icon],svg[fluent-color-patient-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPatient200)" d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8.5H4z"></svg:path><svg:path fill="url(#fluentColorPatient201)" d="M7 12.5V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.5z"></svg:path><svg:path fill="url(#fluentColorPatient202)" d="M10 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path fill="url(#fluentColorPatient203)" d="M4 12h12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="url(#fluentColorPatient204)" fill-opacity=".7" d="M4 12h12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="url(#fluentColorPatient205)" d="M6.5 14.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPatient200" x1="8.286" x2="11.926" y1="2" y2="12.273" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient201" x1="8.427" x2="9.705" y1="9.465" y2="12.964" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient202" x1="8.951" x2="10.99" y1="4.532" y2="7.787" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient203" x1="1" x2="17.937" y1=".012" y2="15.895" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient204" x1="10" x2="11.494" y1="6.5" y2="20.814" gradientUnits="userSpaceOnUse"><svg:stop offset=".619" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient205" x1="7.538" x2="7.646" y1="14.577" y2="16.655" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPatient20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
