import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundLowFilledIcon],svg[tdesign-sound-low-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zm12.389-10.1l-.707-.707l-1.414 1.414l.707.707a3.5 3.5 0 0 1 0 4.95l-.707.707l1.414 1.414l.707-.707a5.5 5.5 0 0 0 0-7.778"></svg:path>`,
})
export class TdesignSoundLowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
