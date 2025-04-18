import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPersonFeedback20Icon],svg[fluent-color-person-feedback-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPersonFeedback200)" d="M10.5 12a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 12z"></svg:path><svg:path fill="url(#fluentColorPersonFeedback201)" d="M10.5 12a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 12z"></svg:path><svg:path fill="url(#fluentColorPersonFeedback202)" d="M7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5"></svg:path><svg:path fill="url(#fluentColorPersonFeedback203)" fill-rule="evenodd" d="M12 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1.227c0 .742.94 1.065 1.396.479L14.722 8H16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorPersonFeedback200" x1="4.378" x2="6.616" y1="12.798" y2="18.754" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPersonFeedback201" x1="7" x2="10.164" y1="11.286" y2="21.139" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPersonFeedback202" x1="5.558" x2="8.361" y1="6.231" y2="10.707" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPersonFeedback203" cx="0" cy="0" r="1" gradientTransform="matrix(9.59614 11.27304 -20.30331 17.28314 8.154 -.464)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPersonFeedback20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
