import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorEdit24Icon],svg[fluent-color-edit-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorEdit240)" d="m3.587 15.353l11.059-11.06l5.06 5.061l-11.058 11.06l-3.944-1.116z"></svg:path><svg:path fill="url(#fluentColorEdit241)" d="M3.941 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825s-1.824-.41-3.238-1.823C4.35 16.822 3.941 15 3.941 15"></svg:path><svg:path fill="url(#fluentColorEdit242)" d="M20.952 3.048a3.58 3.58 0 0 0-5.061 0l-2.306 2.306l5.06 5.06l2.307-2.305a3.58 3.58 0 0 0 0-5.06"></svg:path><svg:path fill="url(#fluentColorEdit243)" d="m12.78 6.16l2.12-2.12s.41 1.823 1.824 3.237S19.961 9.1 19.961 9.1l-2.12 2.122s-1.824-.41-3.238-1.823c-1.415-1.415-1.823-3.237-1.823-3.237"></svg:path><svg:defs><svg:lineargradient id="fluentColorEdit240" x1="13.137" x2="15.444" y1="8.468" y2="14.709" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit241" x1=".997" x2="6.044" y1="16.95" y2="21.967" gradientUnits="userSpaceOnUse"><svg:stop offset=".255" stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit242" x1="20.24" x2="17.137" y1="3.751" y2="6.668" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit243" x1="16.495" x2="11.42" y1="8.954" y2="6.736" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#FFE994"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorEdit24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
