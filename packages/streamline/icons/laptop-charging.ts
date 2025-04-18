import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLaptopChargingIcon],svg[streamline-laptop-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5.5l-2 3h3l-2 3M2.475 9.4L.675 12c-.2.3-.2.7 0 1s.5.5.8.5h10.8c.6 0 1-.4 1-1c0-.2 0-.3-.1-.5l-1.8-2.6zm8.9 0v-.9m-4.4-5.1h-3.5c-.6 0-1 .4-1 1v5"></svg:path>`,
})
export class StreamlineLaptopChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
