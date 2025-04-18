import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOfflinePinIcon],svg[ic-sharp-offline-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m5 16H7v-2h10zm-6.7-4L7 10.7l1.4-1.4l1.9 1.9l5.3-5.3L17 7.3z"></svg:path>`,
})
export class IcSharpOfflinePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
