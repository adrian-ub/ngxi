import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundDownFilledIcon],svg[tdesign-sound-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM24 11h-8v2h8z"></svg:path>`,
})
export class TdesignSoundDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
