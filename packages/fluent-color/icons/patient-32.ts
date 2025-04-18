import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPatient32Icon],svg[fluent-color-patient-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPatient320)" d="M8.5 2A3.5 3.5 0 0 0 5 5.5V21h22V5.5A3.5 3.5 0 0 0 23.5 2z"></svg:path><svg:path fill="url(#fluentColorPatient321)" d="M10 21v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4z"></svg:path><svg:path fill="url(#fluentColorPatient322)" d="M20 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="url(#fluentColorPatient323)" d="M23.5 30a3.5 3.5 0 0 0 3.5-3.5V20H5v6.5A3.5 3.5 0 0 0 8.5 30z"></svg:path><svg:path fill="url(#fluentColorPatient324)" fill-opacity=".7" d="M23.5 30a3.5 3.5 0 0 0 3.5-3.5V20H5v6.5A3.5 3.5 0 0 0 8.5 30z"></svg:path><svg:path fill="url(#fluentColorPatient325)" d="M10 24a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPatient320" x1="12.857" x2="19.377" y1="2" y2="20.643" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient321" x1="12.854" x2="14.792" y1="15.798" y2="21.988" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient322" x1="13.902" x2="17.98" y1="7.063" y2="13.574" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient323" x1="-.5" x2="27.773" y1=".02" y2="29.184" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient324" x1="16" x2="18.267" y1="10.833" y2="34.734" gradientUnits="userSpaceOnUse"><svg:stop offset=".619" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient325" x1="11.692" x2="11.937" y1="24.154" y2="28.306" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPatient32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
