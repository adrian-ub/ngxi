import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitRecordAudioIcon],svg[uit-record-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9m0-15a6 6 0 1 0 0 12a6.007 6.007 0 0 0 6-6a6 6 0 0 0-6-6m0 11a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class UitRecordAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
