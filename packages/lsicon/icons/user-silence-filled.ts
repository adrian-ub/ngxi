import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserSilenceFilledIcon],svg[lsicon-user-silence-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8.793 0H11V4h3v1a.5.5 0 0 1-.146.354L12.207 7H14v1h-3V7a.5.5 0 0 1 .146-.354zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserSilenceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
