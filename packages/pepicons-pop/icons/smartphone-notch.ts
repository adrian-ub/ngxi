import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSmartphoneNotchIcon],svg[pepicons-pop-smartphone-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 0h9c1.105 0 2 .943 2 2.105v15.79C17 19.057 16.105 20 15 20H6c-1.105 0-2-.943-2-2.105V2.105C4 .943 4.895 0 6 0m1 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V2z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopSmartphoneNotchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
