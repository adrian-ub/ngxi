import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPerson24Icon],svg[fluent-color-person-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPerson240)" d="M17.754 14a2.25 2.25 0 0 1 2.249 2.249v.918a2.75 2.75 0 0 1-.513 1.6C17.945 20.93 15.42 22 12 22s-5.944-1.072-7.486-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 6.251 14z"></svg:path><svg:path fill="url(#fluentColorPerson241)" d="M17.754 14a2.25 2.25 0 0 1 2.249 2.249v.918a2.75 2.75 0 0 1-.513 1.6C17.945 20.93 15.42 22 12 22s-5.944-1.072-7.486-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 6.251 14z"></svg:path><svg:path fill="url(#fluentColorPerson242)" d="M12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path><svg:defs><svg:lineargradient id="fluentColorPerson240" x1="7.808" x2="10.394" y1="15.064" y2="23.319" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson241" x1="12.003" x2="15.623" y1="13.047" y2="26.573" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson242" x1="9.379" x2="14.475" y1="3.334" y2="11.472" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPerson24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
