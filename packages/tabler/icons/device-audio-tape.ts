import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceAudioTapeIcon],svg[tabler-device-audio-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="m3 17l4-3h10l4 3"></svg:path><svg:circle cx="7.5" cy="9.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="9.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerDeviceAudioTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
