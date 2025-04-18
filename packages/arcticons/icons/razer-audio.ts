import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRazerAudioIcon],svg[arcticons-razer-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.84 18.97v10.163m6.056-18.601v26.815M24.006 3.5v41m6.101-30.944v21.01m6.053-12.669v4.144"></svg:path>`,
})
export class ArcticonsRazerAudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
