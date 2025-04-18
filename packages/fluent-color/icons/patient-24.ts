import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPatient24Icon],svg[fluent-color-patient-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPatient240)" d="M20 4.25A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.25V15.5h16z"></svg:path><svg:path fill="url(#fluentColorPatient241)" d="M8 15.5v-3.254c0-.648.492-1.18 1.122-1.244l.128-.006h5.5c.647 0 1.18.492 1.243 1.122l.007.128V15.5z"></svg:path><svg:path fill="url(#fluentColorPatient242)" d="M12 4.996a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></svg:path><svg:path fill="url(#fluentColorPatient243)" d="M20 15v4.755a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.755V15z"></svg:path><svg:path fill="url(#fluentColorPatient244)" fill-opacity=".7" d="M20 15v4.755a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.755V15z"></svg:path><svg:path fill="url(#fluentColorPatient245)" d="M7.751 17.5h8.5a.75.75 0 0 1 .1 1.493l-.1.007h-8.5a.75.75 0 0 1-.101-1.493zh8.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPatient240" x1="9.714" x2="14.263" y1="2" y2="15.313" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient241" x1="9.902" x2="11.503" y1="11.594" y2="16.133" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient242" x1="10.689" x2="13.237" y1="5.66" y2="9.729" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient243" x1="0" x2="19.767" y1="1.004" y2="22.176" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient244" x1="12" x2="13.531" y1="8.579" y2="25.331" gradientUnits="userSpaceOnUse"><svg:stop offset=".619" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPatient245" x1="8.924" x2="9.117" y1="17.615" y2="20.729" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPatient24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
