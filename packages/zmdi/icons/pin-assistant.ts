import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPinAssistantIcon],svg[zmdi-pin-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 3q18 0 30.5 12.5T384 45v299q0 18-12.5 30.5T341 387h-85l-64 64l-64-64H43q-18 0-30.5-12.5T0 344V45q0-17 12.5-29.5T43 3zM232 235l88-40l-88-40l-40-88l-40 88l-88 40l88 40l40 88z"></svg:path>`,
})
export class ZmdiPinAssistantIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
