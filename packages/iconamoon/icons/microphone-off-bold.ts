import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMicrophoneOffBoldIcon],svg[iconamoon-microphone-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"><svg:path stroke-linejoin="round" d="M19 11c0 .71-.106 1.395-.302 2.04M12 18a7 7 0 0 1-7-7m7 7v3m0-3a6.97 6.97 0 0 0 4.425-1.576M9.714 4.057A3 3 0 0 1 15 6v3.343M9 9v2a3 3 0 0 0 4.562 2.562"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonMicrophoneOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
