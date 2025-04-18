import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPower1SolidIcon],svg[streamline-button-power-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v5.077a1 1 0 1 0 2 0zM3.923 3.059a1 1 0 0 0-1.23-1.577a7 7 0 1 0 8.615 0a1 1 0 0 0-1.231 1.577a5 5 0 1 1-6.154 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPower1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
