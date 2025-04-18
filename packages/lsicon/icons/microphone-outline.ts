import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMicrophoneOutlineIcon],svg[lsicon-microphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 14.5h8M8 14v-2m0 0a4 4 0 0 1-4-4V6m4 6a4 4 0 0 0 4-4V6m-4 4a2 2 0 0 1-2-2V3.5a2 2 0 1 1 4 0V8a2 2 0 0 1-2 2Z"></svg:path>`,
})
export class LsiconMicrophoneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
