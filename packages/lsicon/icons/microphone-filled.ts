import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMicrophoneFilledIcon],svg[lsicon-microphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3.5a2.5 2.5 0 0 1 5 0V8a2.5 2.5 0 0 1-5 0zM4.5 6v2a3.5 3.5 0 1 0 7 0V6h1v2a4.5 4.5 0 0 1-4 4.473V14H12v1H4v-1h3.5v-1.527A4.5 4.5 0 0 1 3.5 8V6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMicrophoneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
