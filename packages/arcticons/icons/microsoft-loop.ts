import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftLoopIcon],svg[arcticons-microsoft-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 30.98h7c3.709 0 7-3.087 7-7c0-3.801-3.05-7-7-7c-3.75 0-7 3.017-7 7zc0 5.815-4.646 11.525-11.5 11.54V23.98c0-10.423 8.386-18.5 18.5-18.5c11.262 0 18.5 9.308 18.5 18.5c0 9.292-7.526 18.5-18.5 18.5l-18.5.04"></svg:path>`,
})
export class ArcticonsMicrosoftLoopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
