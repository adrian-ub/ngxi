import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUploadTrack2BoldDuotoneIcon],svg[solar-upload-track-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 21.273A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.547 3.27l-1.863-1.86a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 7a.75.75 0 0 0-1.5 0v5.55a2.75 2.75 0 1 0 1.5 2.45v-5c.627.471 1.406.75 2.25.75a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 13.75 7m3.72 7.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarUploadTrack2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
