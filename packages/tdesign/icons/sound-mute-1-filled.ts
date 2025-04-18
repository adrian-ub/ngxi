import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMute1FilledIcon],svg[tdesign-sound-mute-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zm13-7.624l-2.12-2.122l-1.415 1.415l2.121 2.12l-2.121 2.122l1.414 1.414L20 13.415l2.122 2.12l1.414-1.414L21.415 12l2.12-2.121l-1.413-1.415z"></svg:path>`,
})
export class TdesignSoundMute1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
