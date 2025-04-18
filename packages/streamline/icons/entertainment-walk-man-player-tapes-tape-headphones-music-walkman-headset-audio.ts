import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentWalkManPlayerTapesTapeHeadphonesMusicWalkmanHeadsetAudioIcon],svg[streamline-entertainment-walk-man-player-tapes-tape-headphones-music-walkman-headset-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="7" x="4.5" y="6.5" rx="1"></svg:rect><svg:path d="M2 7.5v3m10-3v3m-10-2H1A.5.5 0 0 1 .5 8V7A6.5 6.5 0 0 1 7 .5h0A6.5 6.5 0 0 1 13.5 7v1a.5.5 0 0 1-.5.5h-1M7 9v1"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentWalkManPlayerTapesTapeHeadphonesMusicWalkmanHeadsetAudioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
