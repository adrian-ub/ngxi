import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneAudioIcon],svg[marketeq-microphone-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m30.5 20.833l-1.208 20.959a2.083 2.083 0 0 1-2.084 1.958h-4.416a2.083 2.083 0 0 1-2.084-1.958L19.5 20.833zM25 6.25a8.334 8.334 0 0 0-5.458 14.583h10.916A8.334 8.334 0 0 0 25 6.25"></svg:path><svg:path stroke="#344054" d="M33.333 20.833H16.667"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneAudioIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
