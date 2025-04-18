import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentSpeaker2SpeakersMusicAudioIcon],svg[streamline-entertainment-speaker-2-speakers-music-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="13" x="2" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="9" r="2.5"></svg:circle><svg:circle cx="7" cy="3.5" r=".5"></svg:circle><svg:circle cx="7" cy="9" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineEntertainmentSpeaker2SpeakersMusicAudioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
