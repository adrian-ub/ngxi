import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareSmartSpeakerIcon],svg[nrk-hardware-smart-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 1h2v10h-2zm-2.006 22L20 10.982h-2L17.994 21L6 21.006V4.994L16 5V3L4 2.994v20.012zM17 19.067v.001v-.017c.008.002.004.008.002.013zM12 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M20 3h-2v6h2zm-8 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareSmartSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
