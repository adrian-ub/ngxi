import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMicrophoneIcon],svg[uil-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a4 4 0 0 0 4-4V5a4 4 0 0 0-8 0v6a4 4 0 0 0 4 4M10 5a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0Zm10 6a1 1 0 0 0-2 0a6 6 0 0 1-12 0a1 1 0 0 0-2 0a8 8 0 0 0 7 7.93V21H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A8 8 0 0 0 20 11"></svg:path>`,
})
export class UilMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
