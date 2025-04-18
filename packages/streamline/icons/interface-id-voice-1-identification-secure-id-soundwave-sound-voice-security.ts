import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceIdVoice1IdentificationSecureIdSoundwaveSoundVoiceSecurityIcon],svg[streamline-interface-id-voice-1-identification-secure-id-soundwave-sound-voice-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1.5v11m5.2-9v7M3.1 5v4m10.4-7.5v11m-2.6-9v7M8.3 5v4"></svg:path>`,
})
export class StreamlineInterfaceIdVoice1IdentificationSecureIdSoundwaveSoundVoiceSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
