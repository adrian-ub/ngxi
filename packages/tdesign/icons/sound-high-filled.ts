import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundHighFilledIcon],svg[tdesign-sound-high-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM21.157 6.343l-.707-.707l-1.415 1.414l.708.707a6 6 0 0 1 0 8.485l-.707.707l1.414 1.415l.707-.707a8 8 0 0 0 0-11.314"></svg:path><svg:path fill="currentColor" d="m18.682 7.404l-1.414 1.414l.707.707a3.5 3.5 0 0 1 0 4.95l-.707.707l1.414 1.414l.707-.707a5.5 5.5 0 0 0 0-7.778z"></svg:path><svg:path fill="currentColor" d="M17.621 14.121a3 3 0 0 0 0-4.243l-.707-.707l-1.414 1.415l.707.707a1 1 0 0 1 0 1.414l-.707.707l1.414 1.414z"></svg:path>`,
})
export class TdesignSoundHighFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
