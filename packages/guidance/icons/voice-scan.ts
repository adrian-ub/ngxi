import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceVoiceScanIcon],svg[guidance-voice-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 4v16m4.5-13s-.5 2.038-.5 5s.5 5 .5 5m-9-10s.5 2.038.5 5s-.5 5-.5 5m12.75-7s-.25.75-.25 2s.25 2 .25 2m-16.5-4s.25.75.25 2s-.25 2-.25 2M17 1l5.7.3L23 7M7 1l-5.7.3L1 7m6 16l-5.7-.3L1 17m16 6l5.7-.3l.3-5.7"></svg:path>`,
})
export class GuidanceVoiceScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
