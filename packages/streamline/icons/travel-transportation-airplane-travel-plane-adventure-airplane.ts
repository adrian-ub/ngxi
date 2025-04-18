import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelTransportationAirplaneTravelPlaneAdventureAirplaneIcon],svg[streamline-travel-transportation-airplane-travel-plane-adventure-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.75 2.75h-1.61a.49.49 0 0 0-.48.38l-.51 2l-5-1a3.69 3.69 0 0 0-4.4 3.59a1 1 0 0 0 1 1h4.4l1 1.58a2 2 0 0 0 1.68.92h1.1a.5.5 0 0 0 .44-.73l-.88-1.74h2.76a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5Z"></svg:path>`,
})
export class StreamlineTravelTransportationAirplaneTravelPlaneAdventureAirplaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
