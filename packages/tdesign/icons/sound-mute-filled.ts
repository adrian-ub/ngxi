import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMuteFilledIcon],svg[tdesign-sound-mute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17.5v-11H5v11zm10 5.21l-8-4.5V5.79l8-4.5z"></svg:path>`,
})
export class TdesignSoundMuteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
