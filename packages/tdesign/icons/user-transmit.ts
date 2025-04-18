import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserTransmitIcon],svg[tdesign-user-transmit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m12.578 5.596l3.674 2.88v1.526H13.75v-2h4.655l-1.061-.832zM8 16a4 4 0 0 0-4 4h7.8v2H2v-2a6 6 0 0 1 6-6h3.75v2zm5.752 2.498h8.502v2H17.6l1.061.832l-1.234 1.574l-3.674-2.88z"></svg:path>`,
})
export class TdesignUserTransmitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
