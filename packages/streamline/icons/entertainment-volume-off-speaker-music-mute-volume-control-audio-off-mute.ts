import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeOffSpeakerMusicMuteVolumeControlAudioOffMuteIcon],svg[streamline-entertainment-volume-off-speaker-music-mute-volume-control-audio-off-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13M4.5 5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5ZM10 4V3a1 1 0 0 0-.55-.89a1 1 0 0 0-1 .08L4.5 5m2.17 5.56l1.74 1.25a1 1 0 0 0 1 .08A1 1 0 0 0 10 11V7M4.5 9l.29.21"></svg:path>`,
})
export class StreamlineEntertainmentVolumeOffSpeakerMusicMuteVolumeControlAudioOffMuteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
