import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimRecordAudioIcon],svg[uim-record-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="6" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 16a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path>`,
})
export class UimRecordAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
