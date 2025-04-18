import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAudioInputStereoMinijackIcon],svg[mdi-audio-input-stereo-minijack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4V3c0-.55.45-1 1-1s1 .45 1 1v1zm2 5V5h-2v4H9v6c0 1.3.84 2.4 2 2.82V22h2v-4.18c1.16-.42 2-1.52 2-2.82V9z"></svg:path>`,
})
export class MdiAudioInputStereoMinijackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
