import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileAudioSolidIcon],svg[la-file-audio-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm8 4.719v6.469A3 3 0 0 0 15 16c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3v-6.719l2.75.688l.5-1.938zM15 18c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaFileAudioSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
