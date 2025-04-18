import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceSpeakerFilledIcon],svg[tabler-device-speaker-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 9a4 4 0 0 0-3.995 3.8L8 15a4 4 0 1 0 4-4m0-5a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerDeviceSpeakerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
