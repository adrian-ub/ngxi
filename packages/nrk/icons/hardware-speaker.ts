import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareSpeakerIcon],svg[nrk-hardware-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 23.018V.994H4v22.012zM6 3h12v18H6zm6 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 8.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class NrkHardwareSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
