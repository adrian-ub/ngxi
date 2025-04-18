import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMuteIcon],svg[tdesign-sound-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22.71L9.737 17.5H5v-11h4.737L19 1.29zM8.999 8.5H7v7h1.999zm2 7.415L17 19.29V4.71l-6.001 3.375z"></svg:path>`,
})
export class TdesignSoundMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
