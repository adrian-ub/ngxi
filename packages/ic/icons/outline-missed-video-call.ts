import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineMissedVideoCallIcon],svg[ic-outline-missed-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zm-2-1.83V16H5V8h10zm-7.89 2.44L11 15l3.77-3.79l-.78-.79L11 13.43l-3.11-3.1h2.55V9.22H6v4.44h1.11z"></svg:path>`,
})
export class IcOutlineMissedVideoCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
