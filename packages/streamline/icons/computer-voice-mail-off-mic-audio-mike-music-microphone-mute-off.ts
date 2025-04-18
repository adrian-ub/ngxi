import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerVoiceMailOffMicAudioMikeMusicMicrophoneMuteOffIcon],svg[streamline-computer-voice-mail-off-mic-audio-mike-music-microphone-mute-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-8 8a2.49 2.49 0 0 1-1-2V3a2.5 2.5 0 0 1 5 0v1.5m-.23 3.04A2.5 2.5 0 0 1 8 8.79m-4.42 1.63A4.46 4.46 0 0 1 2 7h0m10 0h0a4.49 4.49 0 0 1-4.5 4.5h-1a5.25 5.25 0 0 1-.56 0m1.06 0v2"></svg:path>`,
})
export class StreamlineComputerVoiceMailOffMicAudioMikeMusicMicrophoneMuteOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
