import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsMicrophoneIcon],svg[grommet-icons-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 11c0 3 1.79 4 4 4s4-1 4-4V5c0-3-1.79-4-4-4S8 2 8 5zM4 9v2c0 5 3.582 8 8 8s8-3 8-8V9m-8 15v-5"></svg:path>`,
})
export class GrommetIconsMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
