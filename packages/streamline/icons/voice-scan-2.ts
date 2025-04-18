import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVoiceScan2Icon],svg[streamline-voice-scan-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5.18v4.14m4-4.14v4.14M5 6.07v2.36m6-3.25v4.14M9 6.07v2.36m4.5 2.07v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2"></svg:path>`,
})
export class StreamlineVoiceScan2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
