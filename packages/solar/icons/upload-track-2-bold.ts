import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUploadTrack2BoldIcon],svg[solar-upload-track-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.25 15a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 21.273A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.547 3.27l-1.863-1.86a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827zM13 6.25a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5a3.73 3.73 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarUploadTrack2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
