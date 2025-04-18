import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiArloAudioDoorbellIcon],svg[cbi-arlo-audio-doorbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a5.1 5.1 0 0 0-5.095 5.1v9.81a5.1 5.1 0 0 0 10.19 0V7.1A5.1 5.1 0 0 0 12 2m-1.424 3.209h3.135v.919h-3.135zm1.567 8.835a2.509 2.509 0 1 1 2.509-2.508a2.51 2.51 0 0 1-2.509 2.508" class="cls-1"></svg:path>`,
})
export class CbiArloAudioDoorbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
